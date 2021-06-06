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
      color: rgb(0 0 0);
      font-weight: bold;
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
        <NavLink to="/categorias/exchanges" >
          EXCHANGES
        </NavLink>
        <NavLink to="/categorias/wallets" >
          WALLETS
        </NavLink>
        <NavLink to="/categorias/pasivos" >
          PASIVOS
        </NavLink>
        <NavLink to="/categorias/mineria" >
          MINERIA
        </NavLink>
        <NavLink to="/categorias/juegos" >
          JUEGOS
        </NavLink>
        <NavLink to="/categorias/tienda" >
          TIENDA
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink href="#comprar">Registrate</NavBtnLink>
      </NavBtn>
    </Nav>
    <BarsContent active={isBurgerOpen}>
        <a href="/categorias/brokers"className="burgerContent" to="#!">BROKERS</a>
        <a href="/categorias/cursos"className="burgerContent" to="#!">CURSOS</a>
        <a href="/categorias/calendario"className="burgerContent" to="#!">Calendario</a>
        <a href="/categorias/blog" className="burgerContent" to="#!">BLOG</a>
        <a href="/categorias/contacto"className="burgerContent" to="#!">CONTACTO</a>
        <a href="/categorias/exchanges"className="burgerContent" to="/categorias/exchanges">EXCHANGES</a>
        <a href="/categorias/wallets"className="burgerContent" to="#!">WALLETS</a>
        <a href="/categorias/pasivos"className="burgerContent" to="#!">PASIVOS</a>
        <a href="/categorias/mineria"className="burgerContent" to="#!">MINERIA</a>
        <a href="/categorias/juegos"className="burgerContent" to="#!">JUEGOS</a>
        <a href="/categorias/tienda"className="burgerContent" to="#!">TIENDA</a>
        </BarsContent>
    </div>
  );
}
