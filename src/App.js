import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Info from "./pages/Info";

import Carrusel from "./pages/Carrusel";
import Mapa from "./pages/Mapa";
import Cv from "./pages/Cv";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/aguirre" exact>
          <Info/>
        </Route>
        <Route path="/aguirre/mapa">
          <Mapa />
        </Route>
        <Route path="/aguirre/carrusel">
          <Carrusel />
        </Route>
        <Route path="/aguirre/CV">
          <Cv />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
