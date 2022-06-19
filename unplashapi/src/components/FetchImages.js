import axios from "axios";
import React, { useState } from "react";

const FetchImages = () => {
  const [images, setImage] = useState([]);
  const [inputUser, setUser] = useState([]);

  const fetchAPI = (inputUser) => {
    axios
      .get(
        "https://api.unsplash.com/search/photos?page=1&query=" +
          inputUser +
          "&client_id=Pvouu83PsaFR9a1bZDydvhbpDck4fONNj6s0xaxbORU"
      )
      .then((response) => {
        //console.log(response);
        setImage(response.data.results);
      });
  };
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              value={inputUser}
                          onInput={(e) => setUser(e.target.value)} placeholder="Search Here"
            />
            <button
              className="btn btn-primary mx-3"
              onClick={fetchAPI(inputUser)}
            >
              Fetch Images
            </button>
          </div>
        </div>
      </div>
      <div></div>
      <div className="container">
        <div className="row">
          {images.map((value, index) => {
            return (
              <div key={index} className="col-4 my-2">
                    <div className="card" style={{ width: "18rem" }}>
                        <p>{index+1}</p>
                  <img
                    src={value.urls.small}
                    className="card-img-top"
                    alt="..."
                  />
                  <a href={value.links.html} className="btn btn-primary">
                    Download
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchImages;
