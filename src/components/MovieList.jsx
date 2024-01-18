import MovieItem from "./MovieItem.jsx";
import "./MovieList.css";

const MovieList = ({ movies }) => {
  return (
    <section className="MovieList">
      {movies.map((movie) => (
        <MovieItem key={movie._id} {...movie} />
      ))}
    </section>
  );
};

export default MovieList;
