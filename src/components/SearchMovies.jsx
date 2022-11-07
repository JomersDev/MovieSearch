import React, {useState} from "react";
import MovieCard from "./MovieCard";

export default function SearchMovies() {

    const [query, setQuery] = useState(``)
    const [movies, setMovies] = useState([])

    async function searchMovies(e) {
        e.preventDefault()

        const url = `https://api.themoviedb.org/3/search/movie?api_key=387878bc3aa12cf113d7ee3b57efdaf5&language=en-US&query=${query}&page=1&include_adult=false`;

        fetch(url)
            .then(res => res.json())
            .then(data => setMovies(data.results))
    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query" placeholder="Django Unchained" value={query} onChange={(e) => setQuery(e.target.value)}/>
                <button className="button" type="submit">Search</button>
            </form> 
            <div className="card-list">
                <MovieCard movies={movies} />
            </div>
        </>
        
    )
}