const { default: axios } = require("axios");
const args = process.argv.slice(2);
const coins = args.length ? args.join(",") : "bitcoin,01coin";

axios
  .get(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coins}&vs_currencies=usd`
  )
  .then(function (res) {
    const prices = res.data;

    for (const coin in prices) {
      console.log(`${coin}:  ${prices[coin].usd}`);
    }
  })
  .catch(function (err) {
    console.log("Error fetching data:", err.message);
  });
