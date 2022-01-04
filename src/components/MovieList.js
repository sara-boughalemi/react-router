import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const Movie = ({ filtredMovies }) => {
  console.log(filtredMovies);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: "60px",
      }}
    >
      {filtredMovies.map((movie) => {
        return (
          <div key={movie.id}>
            <Link to={`/about/${movie.id}`}>
              <img src={movie.img} width={300} height={300} />
            </Link>
            <h6> {movie.name} </h6>
            <p style={{ fontSize: "12px" }}>{movie.description}</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ReactStars
                count={5}
                size={30}
                value={movie.rating}
                edit={false}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
