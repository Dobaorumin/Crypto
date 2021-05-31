import "../css/Hero.css"

export default function Hero() {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-info">
        <h1>Invierte en un futuro mejor.</h1>
        <p>Regístrate para recibir información y el Curso Básico gratuito de Forex y Crypto.</p>
        <p>No lo pienses más,empieza el cambio de tu vida.</p>
        <form>
        <input placeHolder="Correo Electronico"type="text"></input>
        <a href="#registrate">Regístrate</a>
        </form>
        </div>
      </div>
    </div>
  );
}
