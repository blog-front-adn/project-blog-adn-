import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Aljabar from "./pages/Aljabar";
import Geometri from "./pages/GeoAndTrigon";
import Statistika from "./pages/StatistikaAndPeluang";
import Kalkulus from "./pages/Kalkulus";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/aljabar">
          <Aljabar />
        </Route>
        <Route path="/geometridantrigonometri">
          <Geometri />
        </Route>
        <Route path="/statistikadanpeluang">
          <Statistika />
        </Route>
        <Route path="/kalkulus">
          <Kalkulus />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
