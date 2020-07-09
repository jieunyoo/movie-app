import React from "react";

//only pass in movie b/c just need it, otherwise props

export default function MovieCardSearch({movie}) {


	//const{movie} = props;
	
	return(


				<div className="card2"  >

					<a href = {`https://themoviedb.org/movie/${movie.id}`} >
					<img className="card2--image"
					src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
					alt = {movie.title + 'poster title'} 
						/>
						<div className = "card--content">
						<h3 className="card--title">{movie.title} </h3>
						<p> <strong> Release date: </strong> {movie.release_date}</p>

						<p> <strong> Rating: </strong> {movie.vote_average}</p>
						<p className="card--desc">{movie.overview}</p>
						</div>
						</a>
						</div> 
	)
					}
					
