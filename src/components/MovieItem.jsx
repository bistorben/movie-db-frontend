import "./MovieItem.css";

const MovieItem = ({ title, poster, plot }) => {
  return (
    <section className="MovieItem">
      <h3>{title}</h3>
      <img src={poster} alt="" />
      <p>{plot}</p>
    </section>
  );
};

export default MovieItem;
