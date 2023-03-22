import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setWork] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    let api = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=db9df5cafd32a54ef0cf0c7bd2635oct`;
    console.log(api);
    axios.get(api).then(handleResponse);
  }

  function handleKey(event) {
    setWork(event.target.value);
  }

  return (
    <div>
      <h1 className="Dictionary">Online Dictionary</h1>
      <form onSubmit={search}>
        <input type="search" onChange={handleKey} />
      </form>
    </div>
  );
}
