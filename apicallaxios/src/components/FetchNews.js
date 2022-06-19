import React, { useState } from "react";
import axios from "axios";

const FetchNews = () => {
  const [news, setNews] = useState([]); //to save the response

  const fetchNewsIndia = () => {
    //end points
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=0f7f878ac90f474ab45338e9dcc3ef2f"
      )
      .then((response) => {
        console.log(response);
        setNews(response.data.articles);
      })
      .catch((err) => {});
  };
  const fetchNewsAustalia = () => {
    //end points
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=au&apiKey=0f7f878ac90f474ab45338e9dcc3ef2f"
      )
      .then((response) => {
        //console.log(response);
        setNews(response.data.articles);
      })
      .catch((err) => {});
  };
  const fetchNewsAmerica = () => {
    //end points
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=0f7f878ac90f474ab45338e9dcc3ef2f"
      )
      .then((response) => {
        //console.log(response);
        setNews(response.data.articles);
      })
      .catch((err) => {});
  };
  const fetchNewsUkraine = () => {
    //end points
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=ua&apiKey=0f7f878ac90f474ab45338e9dcc3ef2f"
      )
      .then((response) => {
        //console.log(response);
        setNews(response.data.articles);
      })
      .catch((err) => {});
  };
  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-4">
            {/* <button className="btn btn-primary">Fetch News</button> */}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h4>
              Country News:-
              <button className="btn btn-primary mx-1" onClick={fetchNewsIndia}>
                India
              </button>
              <button
                className="btn btn-primary mx-1"
                onClick={fetchNewsAustalia}
              >
                Austalia
              </button>
              <button
                className="btn btn-primary mx-1"
                onClick={fetchNewsAmerica}
              >
                America
              </button>
              <button
                className="btn btn-primary mx-1"
                onClick={fetchNewsUkraine}
              >
                Ukraine
              </button>
            </h4>
          </div>
        </div>
          </div>
          {/* Display the data */}
      <div className="container">
        <div className="row">
          {news.map((value) => {
            return (
              <div className="col-4 my-2">
                <div className="card" style={{ width: "18rem;" }}>
                  <img src={value.urlToImage} class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{value.tittle}</h5>
                    <p className="card-text">{value.description}</p>
                    <a href={value.url} className="btn btn-primary">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchNews;
