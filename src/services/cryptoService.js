
const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-QJfccRmapYBMsncwZzj2hDTd";

export const fetchCryptos = async ({
  page,
  limit,
  type,
  signal
}) => {
  
    const endpoint =
    type === "trending"
      ? "/search/trending"
      : "/coins/markets?vs_currency=usd"

  const url = new URL(`${BASE_URL}${endpoint}`, window.location.origin);

  url.searchParams.append("page", page);
  url.searchParams.append("per_page", limit);

  const response = await fetch(url, {
        method: 'GET',
        headers: {
            'x-cg-demo-api-key': API_KEY,
            'Accept': 'application/json'
        },
        signal
    })

  if (!response.ok) {
    throw new Error("Error fetching products");
  }

  return response.json()
}