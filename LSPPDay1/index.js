const { default: axios } = require("axios");
const https = require("https");

function fetchPrice() {
  const url =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,01coin,dogecoin,litecoin,ripple&vs_currencies=usd";

  https.get(url, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data = chunk + data;
    });

    res.on("end", () => {
      try {
        const json = JSON.parse(data);

        console.log("Bitcoin Market Data:\n", json);
      } catch (err) {
        console.error("Error parsing response:", err.message);
      }
    });
  });
}

fetchPrice();
