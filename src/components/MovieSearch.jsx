import ComplexSearch from "./ComplexSearch.jsx";
import MovieList from "./MovieList.jsx";
import "./MovieSearch.css";

const MovieSearch = () => {
  return (
    <main className="MovieSearch">
      <ComplexSearch />
      <MovieList />
    </main>
  );
};

export default MovieSearch;
