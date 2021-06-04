import Brokers from "../components/Brokers";
import Disclaimer from "../components/Disclaimer";
import GetTrendingCoins from "../components/GetTrendingCoins";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar";
import NuevasNoticias from "../components/NuevasNoticias";
import TecladoHero from "../components/TecladoHero";

export default function Home(){
    return(
        <>
        <NavBar/>
        <Hero/>
        <Brokers/>
        <NuevasNoticias/>
        <GetTrendingCoins/>
        <TecladoHero/>
        <Disclaimer/>
        </>
    )
}