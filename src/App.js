import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import Container from "@material-ui/core/Container";
import Header from "./components/Header";

class App extends Component {
  state = {
    images: [],
  };
  render() {
    return (
      <div>
        <Header />
        <Container maxWidth="lg">
          <div className="App">
            <Search />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
