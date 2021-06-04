import axios from "axios";
import { useEffect, useState } from "react";
import "../css/GetTrendingCoins.css"
export default function GetTrendingCoins(){

    const [viralCoins,setViralCoins] = useState([])

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/search/trending").then((data) => {
            setViralCoins(data.data.coins)
        })
    },[])

        console.log(viralCoins)

    return(
    <>
        <div className="container">
        <h1 className="titulo" style={{color:"white"}}>Trending Coins on 24h</h1>
        <p style={{color:"white",textAlign:"center",fontWeight:"600",paddingTop:"20px"}}>Estas son las monedas que estan en tendencia en el mercado las últimas 24/Horas</p>
            <div className="card__container">
        {viralCoins.map((data) => {
            return(
                  <div className="card">
                    <div className="card__content">
                      <h3 className="card__header">{data.item.name}</h3>
                      <p className="card__info">{data.item.symbol}</p>
                      <img src={data.item.small} alt={data.item.symbol} className="card__button"></img>
                    </div>
                </div>
            )
        })}
        </div>
    </div>
    </>
    )
}