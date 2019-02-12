import React, { Component } from "react";
import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import Rules from "./components/Rules";
import { Grid } from "@material-ui/core";
import Ships from "./components/Ships";

class App extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={0} justify="center">
          <Header />
        </Grid>

        <Grid container spacing={0} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Ships />
            <Board />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Rules />
            <Board isOpponentsBoard={true} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
