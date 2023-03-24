import React, { useState } from "react";
import "./Dictionary.css";
import Result from "./Results";
import axios from "axios";

export default function Dictionary(props) {
  let [keyword, setWork] = useState("");
  let [definition, setDef] = useState("");

  function searchHandle(event) {
    event.preventDefault();
    setWork(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let api = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=db9df5cafd32a54ef0cf0c7bd2635oct`;
    axios.get(api).then(handleResponse);
  }

  function handleResponse(response) {
    setDef(response.data[0]);
  }
  return (
    <div>
      <section>
        <h1 className="Dictionary">Online Dictionary</h1>
        <form onSubmit={handleSubmit}>
          <label>What word are you looking for?</label>
          <input type={"search"} autoFocus="on" onChange={searchHandle} />
        </form>
      </section>
      <Result definition={definition} />
    </div>
  );
}
