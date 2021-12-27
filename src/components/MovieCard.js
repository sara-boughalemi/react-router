import { useState, useEffect } from "react";
import Movie from "./MovieList";

const MovieContainer = ({ movies, movieName, rating }) => {
  const [filtredMovies, setFiltredmovie] = useState(movies);

  console.log(rating)
  useEffect(() => {
    if (movieName.length !== 0 || rating !== 0) {
      setFiltredmovie(
        movies.filter((movie) => {
          return (
            movie.rating >= rating &&
            movie.name.toLowerCase().includes(movieName.toLowerCase())
          );
        })
      );
    } else {
      setFiltredmovie(movies);
    }
  }, [movies, movieName, rating]);

  return (
    <div>
      <Movie filtredMovies={filtredMovies} />
    </div>
  );
};

export default MovieContainer;
