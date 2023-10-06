import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/App.css";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../views/Home";

function App() {
  const BASE_URL = window.BASE_URL;

  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Switch>
          <Route exact path={`${BASE_URL}/`} component={Home} />
        </Switch>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
