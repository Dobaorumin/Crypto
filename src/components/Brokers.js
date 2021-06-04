import Coin from "./Coin";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Brokers() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false`
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="wrap-coins">
      <div className="coin-app">
        {coins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
      <div className="infoCoin">
        <h1 className="titulo">CRYPTOJR</h1>
        <br />
        <h3>Bienvenidos al Directorio para los inversionistas!</h3>
        <br />

        <p>
          Deja de perder el tiempo en localizar las plataformas de información,
          apredizaje, brokers, pasivos, juegos y mucho más.
        </p>
        <br />
        <p>
          Nuestro proposito es unificar toda la información y ayuda para
          optimizar tu tiempo.  
        </p>
        <br />
        <p>Utiliza los mimsmo beneficios que estamos disfrutando atualmente.</p>
        <br />
        <p>
          Unete alguno de nuestros brokers y plataformas de trading y/o compra
          venta de criptomonedas. Con beneficos y mejoras que otras plataformas
          no podran ofrecerte por no ser Partner Oficiales. Disponemos de una
          amplia variedad de opciones según el interés de cada cliente.
          Dispóngase a visualizar nuestro contenido en los proximos apartados.
        </p>

        <br />
        <p className="disclaimer2">
          *Los CFD, derivados, criptodivisas y valores conllevan un altro riesgo
          de posible pérdida rápida de capital debido a su apalancamiento y
          volatilidad. El 75% de cuentas de los inversores minoristas pierden su
          capital cuando operan con dichos valores. Debe tener en cuenta como
          funcionan y si puede permitirse asumir un alto riesgo de la pérdida de
          su capital.
        </p>
      </div>
    </div>
  );
}
