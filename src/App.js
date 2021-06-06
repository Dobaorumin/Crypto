import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Exchanges from "./pages/Exchanges";
import Cursos from "./pages/Cursos";
import BrokersPage from "./pages/Brokers";
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
      </Switch>
    </Router>
    </>
  )
}

export default App;
