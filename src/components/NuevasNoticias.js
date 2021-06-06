import axios from "axios";
import { useEffect, useState } from "react";
import "../css/NuevasNoticias.css";


export default function NuevasNoticias() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/status_updates?per_page=5")
      .then((data) => {
        setNoticias(data.data.status_updates);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(noticias);
  return (
    <>
    <div className="container-info">
      <h1 className="titulo">Noticias</h1>
      <p style={{color:"white",textAlign:"center",fontWeight:"600",paddingTop:"20px"}}>Ultimas 5 noticias relacionadas con el mercado de las criptomonedas</p>
      <div className="info-container">
        {noticias.map((data) => {
          return (
            <details open>
              <summary>
                <img
                  className="imagen-info"
                  alt="hola"
                  src={data.project.image.small}
                />
                <h3 className="info-title">{data.project.name}</h3>
              </summary>
              <div className="description">{data.description}</div>
            </details>
          );
        })}
      </div>
    </div>
    </>
  );
}
