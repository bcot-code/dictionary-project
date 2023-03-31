import React from "react";
import Meanings from "./Meanings";
import Phonetic from "./Phonetics";

export default function Results(props) {
  if (props.definition) {
    return (
      <div className="Results">
        <section className="word row">
          <h1>{props.definition.word}</h1>
          <div className="col-8">
            <div className="col-2">
              <Phonetic phonetic={props.definition.phonetic} />
            </div>
          </div>
        </section>

        <section className="meaning">
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
