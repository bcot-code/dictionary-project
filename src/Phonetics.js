import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <div>{props.phonetic}</div>
      <br />
      <div className="col-5">
        <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />
      </div>
    </div>
  );
}
