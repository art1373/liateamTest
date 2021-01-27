import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Containers/Home";
import Products from "./Containers/Products";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products/:id" component={Products} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
