import React from 'react';
import ReactDOM from 'react-dom';
import './Styles.css';
import SearchMovies from "./SearchMovies";
import ListMovies from "./ListMovies";
import TrendingMovies from "./TrendingMovies";
require('dotenv').config();

class Main extends React.Component {
	render() {


		return (
			<div className="container">
			
				<h1 className="title"> Movie selections brought to you from: </h1>
			
				<img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg" />


			<h1 className="title"> Search for your favorite movie </h1>


			<h1 className="title"> Find the most popular movie </h1>

			<TrendingMovies />

			</div>
		)
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
