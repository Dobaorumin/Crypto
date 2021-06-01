import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Exchanges from "./components/Exchanges";
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
      </Switch>
    </Router>
    </>
  )
}

export default App;
