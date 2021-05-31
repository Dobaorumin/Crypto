import styled from "styled-components"
import {FaBars} from "react-icons/fa"

export const Nav = styled.div`
    width: 100%;
    height:80px;
    position:fixed;
    display:flex;
    justify-content:space-between;
    padding: 0.5rem calc((100vh - 1000px) / 2);
    z-index:10;
`


export const Bars = styled(FaBars)`
display:none;
color:#fff;

    @media screen and (max-width: 938px){
        display:block;
        position:absolute;
        right:0;
        margin: 15.5px;
        transform: translate()(-100%,75%);
        font-size: 1.8rem;
        cursor:pointer;
    }
`

export const NavMenu = styled.div`
display:flex;
align-items:center;
margin-right: -24px;

@media screen and (max-width: 938px) {
    display:none;
}
`

export const NavBtn = styled.nav`
display:flex;
align-items:center;
margin-right: 24px;

@media screen and (max-width: 938px) {
    display:none;
}
`

export const NavBtnLink = styled.a`
background: #fff;
padding: 10px 22px;
color: black;
border:none;
outline:none;
cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;

 &:hover {
     transition: all 0.2s ease-in-out;
     background:black;
     color: #fff;
 }
`

export const BarsContent = styled.div`
  display:flex;
  justify-content:space-between;
  flex-direction:column;
  width: 100%;
  padding-top: 60px;
  height:120vh;
  background: rgb(0,0,0);
  top: ${(props) => (props.active ? "0px" : "100vh")};
  transition: top 0.4s ease-in-out;
  z-index:3;
  position:${(props) => (props.active ? "absolute" : "fixed")};
  align-items: center;

`