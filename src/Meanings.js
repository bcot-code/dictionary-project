import React from "react";

export default function Meanings(props) {
  if (props.meaning) {
    return (
      <div className="Meanings container">
        <div className="row">
          <div className="col-3 part">
            <h3>{props.meaning.partOfSpeech}</h3>
          </div>
          <div className="vertical col-1"></div>
          <div className="col-5">
            <p>{props.meaning.definition}</p>
            <em>{props.meaning.example}</em>
          </div>
          <div className="Syn">
            {props.meaning.synonyms
              ? props.meaning.synonyms.map(function (synonym, index) {
                  return <li key={index}>{synonym}</li>;
                })
              : null}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
