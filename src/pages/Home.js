import Hero from "../components/Hero";
import NavBar from "../components/Navbar";

export default function Home(){
    return(
        <>
        <NavBar/>
        <Hero/>
        <script src="https://cointelegraph.com/news-widget" data-ct-widget-limit="12" data-ct-widget-theme="dark" data-ct-widget-priceindex="true" data-ct-widget-images="true" data-ct-widget-currency="EUR" data-ct-widget-language="es"></script>
        </>
    )
}