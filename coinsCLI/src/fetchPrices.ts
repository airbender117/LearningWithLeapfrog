import axios from "axios";
// import argv from "./cli.js";
type Prices = Record<string, Record<string, number>>;

async function fetchPrices(coins: string, currencies: string): Promise<Prices> {
  try {
    const res = await axios.get<Prices>(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coins}&vs_currencies=${currencies}`
    );
    return res.data;
  } catch (err: any) {
    console.error("Error fetching prices:", err.message);
    return {};
  }
}
export default fetchPrices;
