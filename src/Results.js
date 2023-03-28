import React from "react";
import Meanings from "./Meanings";

export default function Results(props) {
  if (props.definition) {
    return (
      <div className="Results">
        <section>
          <h1>{props.definition.word}</h1>
          <h2>{props.definition.phonetic}</h2>
        </section>

        {props.definition.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meanings meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
