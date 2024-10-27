import MovieList from "../components/movieList";
import Header from "../components/header"
import SearchBar from "../components/searchbar";
import Footer from "../components/footer";

const HomePage = () => {
    return (
        <div>
            <Header />
            <SearchBar />
            <MovieList />
            <Footer />
        </div>
    )
}

export default HomePage