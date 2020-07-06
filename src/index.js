import React from 'react';
import ReactDOM from 'react-dom';
import './Styles.css';
import SearchMovies from "./SearchMovies";
require('dotenv').config();

class Main extends React.Component {
	render() {
		return (
			<div className="container">
			<h1 className="title"> hi </h1>
			<SearchMovies />
			</div>
		)
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
