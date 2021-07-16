import React from "react";
import Header from "./container/Header";
import ContactContainer from "./container/ContactContainer";
import AboutContainer from "./container/AboutContainer";
import PortfolioContainer from "./container/PortfolioContainer";
import FooterContainer from "./container/FooterContainer";
import Home from "./container/Home";
import { ContainerL } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ContainerL>
          <Home />
          <AboutContainer />
          <PortfolioContainer />
          <ContactContainer />
          <FooterContainer />
        </ContainerL>
      </div>

      <Route
        path="/google"
        component={() => {
          window.location = "https://google.com";
          return null;
        }}
      />
    </Router>
  );
}

export default App;
