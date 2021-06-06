import NavBar from "../components/Navbar";
import "../css/BrokersPage.css";

import {brokers} from "../utils/infoBrokers"

export default function BrokersPage() {

  console.log(brokers)
  return (
    <>
      <NavBar />
      <div className="container-brokers">
        <h1 className="titulo2"> Listado de Brokers Más usados</h1>
        {brokers.map((data) => {
          return(
            <div className="wrap-brokers">
          <div className="brokers">
            <img alt={data.nombre} src={data.imagen} />
            <div className="info">
              <h3 className="h3-brokers">{data.nombre}</h3>
              <p className="p-brokers">
                {data.descripcion}
              </p>
              <a href={data.link}className="a-brokers">Link</a>
            </div>
          </div>
        </div>
          )
        })}
      </div>
    </>
  );
}
