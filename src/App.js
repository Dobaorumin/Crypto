import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
      </Switch>
    </Router>
    </>
  )
}

export default App;
