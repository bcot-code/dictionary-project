import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <div>{props.phonetic}</div>
      <div className="col-2">
        <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls />
      </div>
    </div>
  );
}
