import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/Card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    const getData = async () => {
        try {
          const response = await fetch(` https://api.themoviedb.org/3/movie/{{ id }}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`);
      
          if (!response.ok) {
            throw new Error(`Network response was not ok, status: ${response.status}`);
          }
      
          const data = await response.json();
          setMovieList(data.results);
        } catch (error) {
          console.error("Error fetching data:", error.message);
        }
      };

    getData();
  }, [type]);

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOThiZDgxODFmOTUwNTVjOWZhMTJmMjYzZWU2MDA2ZiIsInN1YiI6IjY1MmMxYzlhMzU4ZGE3MDBhZDM1NzhmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TR2HZARagC4cvUujybT8fJ3qQp-8mGkqicroK7KBnUo'
  }
};

fetch('https://api.themoviedb.org/3/movie/movie_id?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));