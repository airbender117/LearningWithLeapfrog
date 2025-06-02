#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import axios from "axios";

const argv = yargs(hideBin(process.argv))
  .usage("Usage: coins --coins=bitcoin,ethereum,01coin --currencies=usd,aud,btc")
  .option("coins", {
    alias: "c",
    describe: "Comma separated list of coin IDs",
    type: "string",
    demandOption: false,
    default: "bitcoin,ethereum",
  })
  .option("currencies", {
    alias: "v",
    describe: "Comma separated list of currency IDs",
    type: "string",
    demandOption: false,
    default: "usd",
  })
  .option("refresh", {
    alias: "r",
    describe: "Refresh interval in seconds",
    type: "number",
    default: 10,
  })
  .help()
  .alias("help", "h").argv;
const coins = argv.coins.slice("");
// console.log(coins);
const currencies = argv.currencies;
// console.log(currencies);
const refreshIntervals = argv.refresh * 1000;
// const args = process.argv.slice(2);
// const coins = args.length ? args.join(",") : "bitcoin,01coin";
//console.clear();
//console.log("Shitting in my pants...");
//console.log(`Last updated: ${new Date().toLocaleTimeString()}`);

function fetchPrices() {
  axios
    .get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coins}&vs_currencies=${currencies}`
    )
    .then(function (res) {
      const prices = res.data;
      console.clear();
      console.log("Results");

      // console.log(prices);

      for (const coin in prices) {
        const values = Object.entries(prices[coin])
          .map(([currency, price]) => `${currency.toUpperCase()}: ${price}`)
          .join(" | ");
        // console.log(currency, price);
        console.log(`${coin.toUpperCase()}:  ${values}`);
      }
      console.log(`Last updated: ${new Date().toLocaleTimeString()}`);

      let count = 9;

      const interval = setInterval(() => {
        process.stdout.write(`\rRefreshes in: ${count}  `);
        count--;

        if (count < 0) {
          clearInterval(interval);
        }
      }, 1000);
    })
    .catch(function (err) {
      console.log("Error fetching data:", err.message);
    });
}
fetchPrices();
setInterval(fetchPrices, refreshIntervals);
