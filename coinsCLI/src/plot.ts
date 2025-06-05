 import axios from "axios"
 import {plot} from 'nodeplotlib'
 import type {PlotData} from 'plotly.js'
 async function harryPlotter(): Promise<void>{
 try{
    const res = await axios.get
    <{prices:[number,number][];}>
    (`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?&vs_currency=usd&days=1`)
 const prices = res.data.prices
 const value:number[] = prices.map(p=>p[1])
 const time:number[] = prices.map(p=> p[0])
 const timeStrings:string[] = time.map(ts => {
  const date = new Date(ts);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
});
 
 const graph =[{x:timeStrings,y:value,type:'scatter',mode:'lines'},] as Partial<PlotData>[]
 plot(graph)
 }





catch(err:any){
    console.error(err.message)

}
}
export default harryPlotter