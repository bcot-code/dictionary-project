import React from "react";

export default function Meanings(props) {
  if (props.meaning) {
    return (
      <div className="Meanings">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>{props.meaning.definition}</p>
        <em>{props.meaning.example}</em>
        <div className="Syn">
          {props.meaning.synonyms
            ? props.meaning.synonyms.map(function (synonym, index) {
                return <li key={index}>{synonym}</li>;
              })
            : null}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
