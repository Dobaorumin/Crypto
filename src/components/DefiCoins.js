import axios from "axios"
import { useEffect, useState } from "react"

export default function DefiCoins(){

    const [defiCoins,setDefiCoins] = useState([])
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/global/decentralized_finance_defi")
        .then((data) => {
            setDefiCoins(data)
        })
    },[])

    console.log(defiCoins)
    
    return(
       <h1>hola</h1>
    )
}