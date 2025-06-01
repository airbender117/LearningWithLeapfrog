const https = require("https");

function fetchBitcoinPrice() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&x_cg_demo_api_key=CG-Yf1yKRniyq7g6wWo4gqbEufd";

  https
    .get(url, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        try {
          const json = JSON.parse(data);
          const btc = json[0];
          console.log("Bitcoin Market Data:\n", btc.current_price);
        } catch (err) {
          console.error("Error parsing response:", err.message);
        }
      });
    })
    .on("error", (err) => {
      console.error("Request failed:", err.message);
    });
}

fetchBitcoinPrice();
