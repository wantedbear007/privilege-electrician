import React from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import styles from "./App.module.css";
import { Route } from "react-router-dom";
import Services from "./screens/Services/Services";
import About from "./screens/About/About";
import Home from "./screens/Home/Home";
import MyWork from "./screens/MyWork/MyWork";
import Contact from "./screens/Contact/Contact";

const App = () => {
  return (
    <React.Fragment>
      <div className={styles.primaryContainer}>
        <Header />
        <Route path="home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/work">
          <MyWork />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
