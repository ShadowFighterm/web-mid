import movieList from "./movieList.module.css";
import kungfupanda from "../assets/kungfupanda.jpg";
import venom from "../assets/venom.jpg";
import dolittle from "../assets/dolittle.jpg";
import cars from "../assets/cars.jpg";
import harrypotter from "../assets/harrypotter.jpg";
import toystory from "../assets/toystory.jpg";

const Movies = [
    {
        title: "Kung fu panda 4",
        year: "2024",
        rating: "4.5",
        img: kungfupanda,
    },
    {
        title: "Venom",
        year: "2024",
        rating: "4.7",
        img: venom,
    },
    {
        title: "Dolittle",
        year: "2018",
        rating: "4.3",
        img: dolittle,
    },
    {
        title: "Cars",
        year: "2008",
        rating: "4.6",
        img: cars,
    },
    {
        title: "Harry Potter",
        year: "2001",
        rating: "4.9",
        img: harrypotter
    },
    {
        title: "Toy Story",
        year: "2005",
        rating: "4.5",
        img: toystory
    },
]
const MovieList = () => {
    return (
        <div className={movieList.container}>
            <div className={movieList.cardContainer}>
                {Movies.map((movie) => {
                    return (
                        <div className={movieList.movieCard}>
                            <img src={movie.img}></img>
                            <h1>{movie.title}</h1>
                            <p>Release date: {movie.year}<br></br>Rating:{movie.rating}</p>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}
export default MovieList
