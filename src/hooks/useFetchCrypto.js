
import { useEffect, useState } from "react";
import { fetchCryptos } from "../services/cryptoService"

export const useFetchCrypto = ({
  page,
  limit,
  type
}) => {
    
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadCryptos = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await fetchCryptos({
          page,
          limit,
          type,
          signal: controller.signal
        })

        setData(result);

      } catch (err) {
        if (err.name !== "AbortError") {
            setError(err.message)
        }

      } finally {
          setLoading(false);
      }
    }

    loadCryptos();

    return () => {
      controller.abort()
    }

  }, [page, limit, type])

  return { data, loading, error }
}


















/*export default function useFetchCrypto({
    
  page,
  limit,
  type = "all"

}) {

    const [data, setData] = useState(null);

    const apiURL = "https://api.coingecko.com/api/v3";
    const apiKey = "CG-QJfccRmapYBMsncwZzj2hDTd";

    useEffect(() => {



        async function getCryptos() {
            await fetch(`${apiURL}/coins/markets?vs_currency=usd&page=${page}&per_page=10 `, {
                method: 'GET',
                headers: {
                    'x-cg-demo-api-key': apiKey,
                    'Accept': 'application/json'
                }
            })
            .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
            })
            .then(data => {
            console.log(data);
            })
            .catch(error => {
            console.error('Error fetching data:', error);
            });
        }
    }, [page])

    useEffect(() => {
        async function getTrending() {
            await fetch(`${apiURL}/search/trending?page=${page}&per_page=5`, {
                method: 'GET',
                headers: {
                    'x-cg-demo-api-key': apiKey, 
                    'Accept': 'application/json'
                }
            })
            .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
            })
            .then(data => {
            console.log(data);
            })
            .catch(error => {
            console.error('Error fetching data:', error);
            });
        }
    }, [page])

    return {getAll, getTrending}
}*/