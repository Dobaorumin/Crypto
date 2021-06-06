import NavBar from "../components/Navbar";
import cursos from "../img/Studing.png";
import "../css/Cursos.css"
export default function Cursos() {
  return (
    <>
      <NavBar />
      <div className="wrap-cursos">
        <h1 className="titulo2">Cursos</h1>
        <div className="container-cursos">
          <div className="imagen-curso">
            <img className="imagen"src={cursos} alt="Cursos" />
            <div className="info-curso">
              <p>
                Realizamos un pdf para todos los interesados en aprender des de
                cero en los campos de Forex y Crypto. De forma gratuita y
                básica, que fuera fácil de leer y entender, pudiendo poder en
                práctica luego. Próximamente realizaremos ampliaciones tanto
                gratuitas como de pago.
              </p>
              <a href="!#">Registrate</a>
            </div>
          </div>
            <h1 className="titulo">Tutoriales</h1>
            <br/>
            <div className="div-youtube">
            <a className="Youtube" href="https://www.youtube.com/channel/UCYMcMF0awSza2-x8zcTr1nw" target="blank"> YouTube</a>
            </div>
        </div>
      </div>
    </>
  );
}
