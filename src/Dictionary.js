import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setWork] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
