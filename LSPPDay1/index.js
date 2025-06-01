const https = require("https");

function fetchBitcoinPrice() {
  const url =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,01coin&vs_currencies=usd";

  https
    .get(url, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        try {
          const json = JSON.parse(data);
          //   const btc = json[0];
          console.log("Bitcoin Market Data:\n", json);
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
