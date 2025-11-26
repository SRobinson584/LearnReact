import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    
    const movies = [
        { id: 1, title: "John Wick", release_date: 2021 },
        { id: 2, title: "John Wick 2", release_date: 2022 },
        { id: 3, title: "John Wick 3", release_date: 2023 },
    ];

    const handleSearch = () => { };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies" className="search-input" />
                <button type="submit className = "search-button>
                    Search
                </button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home