#!/usr/bin/env node
import fetchPrices from "./fetchPrices.js";
import argv from "./cli.js";
import startCountdown from "./countdown.js";
const refreshInterval: number = argv.refresh;
const coins: string = argv.coins;
const currencies: string = argv.currencies;

interface Prices {
  [coin: string]: {
    [currency: string]: number;
  };
}

// const args = process.argv.slice(2);
// const coins = args.length ? args.join(",") : "bitcoin,01coin";
//console.clear();
//console.log("Shitting in my pants...");
//console.log(`Last updated: ${new Date().toLocaleTimeString()}`);
async function render(): Promise<void> {
  try {
    const prices: Prices = await fetchPrices(coins, currencies);
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
    startCountdown(refreshInterval - 1);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Error:", err.message);
    } else {
      console.error("Error:", err);
    }
  }
}
render();

setInterval(render, refreshInterval * 1000);
