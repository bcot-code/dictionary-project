import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <div className="col-2">{props.phonetic}</div>
      <div className="row">
        <div className="audio col-8">
          <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />
        </div>
      </div>
    </div>
  );
}
