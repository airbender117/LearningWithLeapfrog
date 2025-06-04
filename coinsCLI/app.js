#!/usr/bin/env node
import fetchPrices from "./fetchPrices.js";
import argv from "./cli.js";
import startCountdown from "./countdown.js";
let refreshIntervals = argv.refresh;
let coins = argv.coins;
let currencies = argv.currencies;

// const args = process.argv.slice(2);
// const coins = args.length ? args.join(",") : "bitcoin,01coin";
//console.clear();
//console.log("Shitting in my pants...");
//console.log(`Last updated: ${new Date().toLocaleTimeString()}`);
async function render() {
  try {
    const prices = await fetchPrices(coins, currencies);
    // console.log(prices);
    console.clear();
    console.log("Results");

    console.log(`Last updated: ${new Date().toLocaleTimeString()}`);
    for (const coin in prices) {
      const values = Object.entries(prices[coin])
        .map(([currency, price]) => `${currency.toUpperCase()}: ${price}`)
        .join(" | ");

      console.log(`${coin.toUpperCase()}:  ${values}`);
    }
    startCountdown(argv.refresh - 1);
  } catch (err) {
    console.error("Error:", err.message);
  }
}
render();

setInterval(render, refreshIntervals * 1000);
