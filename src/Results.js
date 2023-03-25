import React from "react";
import Meanings from "./Meanings";

export default function Results(props) {
  if (props.defintion) {
    return (
      <div className="Results">
        <section>
          <h1>{props.defintion.word}</h1>
          <h2>{props.defintion.phonetic}</h2>
        </section>

        {props.defintion.meanings.map(function (meaning, index) {
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
