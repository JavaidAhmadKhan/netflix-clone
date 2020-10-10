import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fectchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fectchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fectchNetflixOriginals} />
      <Row title="Action Movies" fetchUrl={requests.fectchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fectchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fectchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fectchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fectchDocumentries} />
    </div>
  );
}

export default App;
