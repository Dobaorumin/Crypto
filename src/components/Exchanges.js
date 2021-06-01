import axios from "axios";
import "../css/Table.css";
import { useEffect, useState } from "react";
import Coin from './Coin';
import NavBar from "./Navbar";

export default function Exchanges() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        setCoins(res.data);
      }).catch((error) => {
          console.log(error)
      });
  });

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <NavBar/>
      <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Busca una moneda</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Busqueda'
          />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
    </>
  );
}
