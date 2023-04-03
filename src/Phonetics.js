import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <div lassName="col-5">
        <div>{props.phonetic}</div>
      </div>
      <div className="row">
        <div className="audio col-9">
          <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />
        </div>
      </div>
    </div>
  );
}
