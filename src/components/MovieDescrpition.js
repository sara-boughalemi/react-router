import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";

const MovieDescription = ({ movies }) => {
  const [movieDescription, setMovieDescription] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    setMovieDescription(movies.find((movie) => movie.id == id));
  }, [id]);
  return (
    <div>
      <h1>{movieDescription.name}</h1>
      <img src={movieDescription.img} alt={movieDescription.name} />
      <h5>{movieDescription.description}</h5>
    </div>
  );
};

export default MovieDescription;
