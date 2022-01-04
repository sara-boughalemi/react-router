import { useState } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie";
import MainNavbar from "./components/MainNavbar";
import MovieCard from "./components/MovieCard";
import MovieDescrpition from "./components/MovieDescrpition";
import { Switch, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      img: "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      name: "Wonder woman",
      description: "Amazon princess Diana. sets out to stop World War I",
      rating: 4,
      trailer: "https://www.youtube.com/watch?v=1Q8fG0TtVAY",
    },
    {
      id: 2,
      img: "https://www.leparisien.fr/resizer/gGWX5PWAnML9mKavSb6bu0nLnnc=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/KCQCVRECAAEGVVL3X25XLC7MOA.jpg",
      name: "La casa de papel",
      description:
        "The professor gathers a team of thieves and other talented criminals to stage the biggest stunt in history",
      rating: 5,
      trailer: "https://www.youtube.com/watch?v=uwsmkWh0S5Y",
    },
    {
      id: 3,
      img: "https://fr.web.img3.acsta.net/pictures/15/05/06/16/13/020977.jpg",
      name: "Mr robot",
      description:
        "Elliot Alderson is a young computer scientist living in New York",
      rating: 3,
      trailer: "https://www.youtube.com/watch?v=xIBiJ_SzJTA",
    },
  ]);
  const [movieName, setmovieName] = useState("");
  const [rating, setRating] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [NewMovie, setNewMovie] = useState({
    id: Math.random(),
    img: "",
    name: "",
    description: "",
    rating: 0,
  });
  const handleSearch = (e) => {
    setmovieName(e.target.value);
  };
  const handleRating = (newRating) => {
    setRating(newRating);
  };
  const handleModal = () => {
    if (NewMovie.name.length !== 0 && NewMovie.img.length !== 0) {
      setMovies([...movies, NewMovie]);
      setToggle(!toggle);
    } else {
      setToggle(!toggle);
    }
  };
  const handleAddMovie = (e) => {
    setNewMovie({ ...NewMovie, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <MainNavbar
        movieName={movieName}
        handelSearch={handleSearch}
        rating={rating}
        handleRating={handleRating}
        handelModal={handleModal}
      />
      <Switch>
react route
        <Route path="/">
          <MovieCard movies={movies} movieName={movieName} rating={rating} />
          <AddMovie
            toggle={toggle}
            handelModal={handleModal}
            NewMovie={NewMovie}
            handleAddMovie={handleAddMovie}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
