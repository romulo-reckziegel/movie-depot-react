import React, {useEffect, useState} from "react";
import MovieCard from "./MovieCard";
import "./App.css";

//api key: 7387e11d

const API_URL = 'http://www.omdbapi.com?apikey=7387e11d';

const App = () => {

    const [searchMovie, setSearchMovie] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    

    const searchFilter = async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();
        setSearchMovie(data.Search);
        console.log(data);
    }
 
    useEffect(() => {
        searchFilter("Spiderman");
    }, []);


    return (
        <div className="app">
        <h1>MovieDepot</h1>
        <div className="search">
            <input
                placeholder="Movies/TV Shows/Documentaries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="searchbutton"
                alt="search"
                onClick={() => searchFilter(searchTerm)}
            > Search </button> 
        </div>
        {
                searchMovie?.length > 0
                    ? (
                        <div className="container">
                            {searchMovie.map((movie) =>
                            (<MovieCard movie = {movie} />))}
                        </div>)
                    : (
                        <div className="empty">
                            <h2>Type a valid title.</h2>
                        </div> )
        }
        </div>
    
    );
}

export default App; 
