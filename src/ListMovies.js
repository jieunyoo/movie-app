import React, {useState} from 'react';
import MovieCard from './MovieCard.js';
require('dotenv').config();

export default function ListMovies() {

	const APIKEY =  process.env.REACT_APP_MY_API_KEY;
	const [query, setQuery] = useState('');

	const [movies,setMovies] = useState([]);

	const searchM = async(e) => {
		e.preventDefault();

		//const query = "Jurassic Park";

		//const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${query}&page=1&include_adult=false`;
		
const url= `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

		try {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data.results);
			setMovies(data.results);

		}
		catch(err) {
			console.error(err);
		}

	}


	return (
		<>
		<form className = "form" onSubmit={searchM}>
			<label className = "label" htmlFor="query"> Movie name </label>
			<input className = "input" type="text" name="query" 
			placeholder="jurassic park"
			value={query} onChange={(e) => setQuery(e.target.value)}/>
			<button className="button" type="submit"> Search </button>
		</form>
			<div className="card-list">
				{movies.filter(movie => movie.poster_path).map(movie => (

					<MovieCard movie={movie} key={movie.id}/>
					))}
					</div>
		</>

	)
}
