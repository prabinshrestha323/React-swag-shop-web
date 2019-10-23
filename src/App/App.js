import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HttpService from "../services/http-service";
import { tsConstructorType } from "@babel/types";
const http = new HttpService();
var props;
var Super;

function App() {
  constructor(props);
  {
    Super(props);
    http.getProduct();
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to the Swag shop</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
