import React, { useState, useEffect } from "react";
import "./dashboard.css";
import MovieCard from "../../components/movies/MovieCard";
import axios from "axios";

const WatchLater = () => {
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchWatchLater = async () => {
            const token = localStorage.getItem("accessToken");
            if (!token) {
                setErrorMessage("You are not authenticated. Please log in.");
                return;
            }
            setLoading(true);

            try {
                const response = await axios.get("http://localhost:8000/api/titles/watchlater/", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setMovies(response.data);
            } catch (error) {
                console.error("Error fetching watch later movies:", error);
                setErrorMessage("Failed to fetch watch later movies.");
            } finally {
                setLoading(false);
            }
        };

        fetchWatchLater();
    }, []);

    return (
        <div className="dashboard-content">
            <h1>Watch Later</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {loading && <p>Loading movies...</p>}
            <ul className="movies-list">
                {movies.length > 0 ? (
                    movies.map((movie, index) => <MovieCard key={`${movie.imdbId}-${index}`} movie={movie} />)
                ) : (
                    <p>No movies in watch later.</p>
                )}
            </ul>
        </div>
    );
};

export default WatchLater;