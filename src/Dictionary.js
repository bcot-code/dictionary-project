import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photo.js";
import axios from "axios";

export default function Dictionary(props) {
  let [keyword, setWork] = useState(props.defaultWord);
  let [definition, setDef] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data.meanings[0].definition);
    setDef(response.data);
  }
  function handleUnsplashResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let api = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=db9df5cafd32a54ef0cf0c7bd2635oct`;
    axios.get(api).then(handleResponse);

    let headers = `https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY`;
    let unsplashsApi = `https://api.unsplash.com/v1/search?query=${keyword}&per_page=4`;
    axios.get(unsplashsApi, { headers: headers }).then(handleUnsplashResponse);
  }

  function searchHandle(event) {
    setWork(event.target.value);
  }

  return (
    <div>
      <h1 className="Dictionary">Online Dictionary</h1>
      <div className="row justify-content-end">
        <section>
          <form className="col-3" onSubmit={handleSubmit}>
            <label>What word are you looking for?</label>
            <input type="search" autoFocus="on" onChange={searchHandle} />
          </form>
        </section>
      </div>

      <Results definition={definition} />
      <br />
      <Photos photos={photos} />
    </div>
  );
}
