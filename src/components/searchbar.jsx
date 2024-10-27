import searchbar from "./searchbar.module.css";


const SearchBar = () => {
    return (
        <div className={searchbar.container}>
            <div className={searchbar.searchbox}>
                <input type="text"></input>
                <button>search</button>
            </div>
        </div>
    );
}

export default SearchBar;