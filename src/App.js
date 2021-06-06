import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Exchanges from "./pages/Exchanges";
import Cursos from "./pages/Cursos";
import BrokersPage from "./pages/Brokers";
import Contacto from "./pages/Contacto";
function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route exact path="/categorias/exchanges">
            <Exchanges/>
        </Route>
        <Route exact path="/categorias/cursos">
            <Cursos/>
        </Route>
        <Route exact path="/categorias/brokers">
            <BrokersPage/>
        </Route>
        <Route exact path="/categorias/contacto">
            <Contacto/>
        </Route>
      </Switch>
    </Router>
    </>
  )
}

export default App;
