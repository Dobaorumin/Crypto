import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import NavBar from "../components/Navbar";
import "../css/Contacto.css";

export default function Contacto() {
  return (
    <>
      <NavBar />
      <div className="contacto">
        <h1 className="titulo2">Contacta con nosotros!</h1>
        <p className="p-contact">Contacta con nosotros, estaremos encantados de ayudarte en todo momento</p>
        <section class="contact-section">
        <form class="form">
            <div class="id">
                <div class="nombre">
                    <label for="nombre">Nombre</label>
                    <input id="nombre" type="text" name="nombre" />
                </div>
                <div class="email">
                    <label for="email">Email</label>
                    <input id="email" type="text" name="email" />
                </div>
            </div>
            <div class="asunto">
                <label for="asunto">Asunto</label>

                <input id="asunto" type="text" name="asunto" />
            </div>
            <div class="contenido">
                <label id="contenido" for="contenido">Contenido</label>

                <textarea name="contenido" id="" cols="30" rows="10"></textarea>
                <button type="submit">Enviar</button>

            </div>
        </form>
    </section>
        <div className="contacto-info">
          <a href="https://es.linkedin.com/in/cryptojr-jr-1166a1168">
            <h1>
              <IoLogoLinkedin />
            </h1>
          </a>
          <a href="https://www.instagram.com/cryptojr_official/">
            <h1>
              <IoLogoInstagram />
            </h1>
          </a>
          <a href="https://www.facebook.com/cryptojrofficial">
            <h1>
              <IoLogoFacebook />
            </h1>
          </a>
          <a href="https://www.youtube.com/channel/UCYMcMF0awSza2-x8zcTr1nw">
            <h1>
              <IoLogoYoutube />
            </h1>
          </a>
        </div>
      </div>
    </>
  );
}
