import React, {useState,useEffect} from 'react';
import MovieCard from './MovieCard.js';
require('dotenv').config();

export default function TrendingMovies() {

	const APIKEY =  process.env.REACT_APP_MY_API_KEY;
	const [query, setQuery] = useState('');

	const [movies,setMovies] = useState([]);


	useEffect( () => {

		//const query = "Jurassic Park";

		//const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${query}&page=1&include_adult=false`;
		
		const url =`https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}`;

			fetch(url)
				.then(results => results.json())
				.then(data => {
					console.log(data.results);
			setMovies(data.results);

		});

	},[]);

	
	return (
		<div>
			<div className="card-list">
				{movies.filter(movie => movie.poster_path).map(movie => (

					<MovieCard movie={movie} key={movie.id}/>
					))}
		</div>
</div>
	)

}
