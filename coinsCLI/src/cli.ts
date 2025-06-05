import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export interface CLIArgs {
  coins: string;
  currencies: string;
  refresh: number;
  chart:string;
}

const argv = yargs(hideBin(process.argv))
  .usage(
    "Usage: coins --coins=bitcoin,ethereum,01coin --currencies=usd,aud,btc"
  )
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
    default: 20,
  })
  .option("chart",{
    alias:"c",
    describe:'Plot price history for a coin',
    type:'string',
    default:'usd',
  })
  .help()
  .alias("help", "h").argv;

export default argv as CLIArgs;
