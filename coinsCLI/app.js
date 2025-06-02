import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import axios from "axios";

const argv = yargs(hideBin(process.argv))
  .usage("Usage: node app.js --coins=bitcoin,ethereum,01coin")
  .option("coins", {
    alias: "c",
    describe: "Comma separated list of coin IDs",
    type: "string",
    demandOption: false,
    default: "bitcoin,ethereum",
  })
  .option("currencies", {
    alias: "vs",
    describe: "Comma separated list of currency IDs",
    type: "string",
    demandOption: false,
    default: "usd",
  })
  .help()
  .alias("help", "h").argv;
const coins = argv.coins.slice("");
// console.log(coins);
const currencies = argv.currencies;
// console.log(currencies);
// const args = process.argv.slice(2);
// const coins = args.length ? args.join(",") : "bitcoin,01coin";

axios
  .get(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coins}&vs_currencies=${currencies}`
  )
  .then(function (res) {
    const prices = res.data;
    // console.log(prices);

    for (const coin in prices) {
      console.log(
        `${coin.toUpperCase()}:  ${prices[coin].usd} USD, ${
          prices[coin].aud
        } AUD`
      );
    }
  })
  .catch(function (err) {
    console.log("Error fetching data:", err.message);
  });
