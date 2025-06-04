import yargs from "yargs";
import { hideBin } from "yargs/helpers";
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
export default argv;
