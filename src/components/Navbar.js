import "../css/Navbar.css";
import { useState } from "react";
import {BarsContent,Nav,Bars,NavMenu,NavBtn,NavBtnLink} from "./NavbarElements"
import LOGO from "../img/Logo.png"

import styled from "styled-components"
import {NavLink as Link} from "react-router-dom";


const NavLink = styled(Link)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
padding: 0 1rem;
height:100%;
cursor:pointer;

    &.active {
        color: rgba(58,165,0,1);
    }
`


export default function NavBar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const onBurgerLinkClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };



  return (
    <div>
    <Nav>
      <NavLink to="/">
        <img alt="Logotipo" src={LOGO} className="logo" />
      </NavLink>
      <Bars onClick={onBurgerLinkClick} />
      <NavMenu>
        <NavLink to="/categorias/brokers" >
          BROKERS
        </NavLink>
        <NavLink to="/categorias/cursos" >
          CURSOS
        </NavLink>
        <NavLink to="/categorias/calendario" >
          CALENDARIO
        </NavLink>
        <NavLink to="/categorias/blog" >
          BLOG
        </NavLink>
        <NavLink to="/categorias/contacto" >
          CONTACTO
        </NavLink>
        <NavLink to="/categorias/contacto" >
          CURSOS
        </NavLink>
        <NavLink to="/categorias/contacto" >
          EXCHANGES
        </NavLink>
        <NavLink to="/categorias/contacto" >
          WALLETS
        </NavLink>
        <NavLink to="/categorias/contacto" >
          PASIVOS
        </NavLink>
        <NavLink to="/categorias/contacto" >
          MINERIA
        </NavLink>
        <NavLink to="/categorias/contacto" >
          JUEGOS
        </NavLink>
        <NavLink to="/categorias/contacto" >
          TIENDA
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink href="#comprar">Registrate</NavBtnLink>
      </NavBtn>
    </Nav>
    <BarsContent active={isBurgerOpen}>
        <a href="/categorias/televisores"className="burgerContent" to="#!">SmartTv</a>
        <a href="/categorias/portatiles"className="burgerContent" to="#!">Portatiles</a>
        <a href="/categorias/ordenadores"className="burgerContent" to="#!">Ordenadores</a>
        <a href="/categorias/moviles" className="burgerContent" to="#!">SmartPhones</a>
        <a href="/categorias/monitores"className="burgerContent" to="#!">Monitores</a>
        </BarsContent>
    </div>
  );
}
