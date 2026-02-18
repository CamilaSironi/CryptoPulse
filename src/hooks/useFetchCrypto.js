
export default function useFetchCrypto() {

    const apiURL = "https://api.coingecko.com/api/v3";
    const apiKey = "CG-QJfccRmapYBMsncwZzj2hDTd";

    async function getAll() {
        await fetch(`${apiURL}/coins/markets?vs_currency=usd `, {
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

    async function getTrending() {
        await fetch(`${apiURL}/search/trending`, {
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

    return {getAll, getTrending}
}