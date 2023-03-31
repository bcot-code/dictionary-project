import React from "react";
import Dictionary from "./Dictionary";
import NavBar from "./NavBar.js";
import logo from "./mylogo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="row">
        <header className="App-header col-6">
          <img src={logo} className="App-logo img-fluid " alt="logo" />
          <NavBar />
          <div className="col-5"></div>
        </header>
        <main className="container dictionary">
          <Dictionary defaultWord="life" />
        </main>
        <hr />
        <footer className="text-center reference">
          <small>
            This{" "}
            <a
              href="https://github.com/bcot-code/Awesome1-proj"
              target="_blank"
              rel="noreferrer"
            >
              Open Souce
            </a>{" "}
            is by<em>Barbara C.</em>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}
