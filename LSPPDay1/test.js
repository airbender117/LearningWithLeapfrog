const https = require("https");

https.get(
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
  (res) => {
    res.on("data", (chunk) => {
      console.log("Chunk:", chunk.toString());
    });
  }
);
