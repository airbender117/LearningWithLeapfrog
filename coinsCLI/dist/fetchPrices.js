import axios from "axios";
async function fetchPrices(coins, currencies) {
    try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coins}&vs_currencies=${currencies}`);
        return res.data;
    }
    catch (err) {
        console.error("Error fetching prices:", err.message);
        return {};
    }
}
export default fetchPrices;
