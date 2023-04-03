import React from "react";
import Meanings from "./Meanings";
import Phonetic from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.definition) {
    return (
      <div className="Results">
        <h1 className="word">{props.definition.word}</h1>
        <section className="row">
          <Phonetic phonetic={props.definition.phonetic} />
        </section>
        <br />
        <hr />
        <section className="horizontal">
          {props.definition.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meanings meaning={meaning} />
              </section>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
