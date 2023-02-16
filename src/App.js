import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import utd from "./img/utd.png";
import foto from "./img/foto.jpeg";

import BarraSuperior from "./components/BarraSuperior";
import Carrusel from "./pages/Carrusel";
import Mapa from "./pages/Mapa";
import Cv from "./pages/Cv";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <BarraSuperior/>
          </Route>
          <Route path="/mapa">
            <Mapa/>
          </Route>
          <Route path="/carrusel">
            <Carrusel/>
          </Route>
          <Route path="/CV">
            <Cv/>
          </Route>
          <Route path="/foto">
            <center>
              <img src={foto} />
            </center>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
