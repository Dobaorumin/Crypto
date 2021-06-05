import "../css/Table.css";
import "../css/Coin.css";

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
      <div className="coin-container">
        <div className="coin-row">
          <div className="coin">
            <img src={image} alt="crypto" />
            <h1>{name}</h1>
            <p className="coin-symbol">{symbol}</p>
          </div>
          <div className="coin-data">
            <p className="coin-price">{price} €</p>
            {volume ? <p className="coin-volume">${volume.toLocaleString() + "€"}</p> : null}
            {priceChange < 0 ? (
              <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
            )}
          
          {marketcap ? <p className="coin-marketcap">Cap Mer: ${marketcap.toLocaleString() + "€"}</p> : null}
          </div>
        </div>
      </div>
  );
};

export default Coin;
