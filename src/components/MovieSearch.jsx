import ComplexSearch from "./ComplexSearch.jsx";
import MovieList from "./MovieList.jsx";
import "./MovieSearch.css";
import { useState, useEffect } from "react";

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const response = await fetch("http://localhost:3000/movie/30");
  //     const movies = await response.json();
  //     setMovies(movies);
  //   };
  //   fetchMovies();
  // }, []);

  useEffect(() => {
    if (search.length > 2) {
      const fetchMovies = async () => {
        const response = await fetch(
          `http://localhost:3000/movies/search?title=${search}`
        );
        const movies = await response.json();
        setMovies(movies);
      };
      fetchMovies();
    }
  }, [search]);

  return (
    <main className="MovieSearch">
      <ComplexSearch setSearch={setSearch} search={search} />
      <MovieList movies={movies} />
    </main>
  );
};

export default MovieSearch;
