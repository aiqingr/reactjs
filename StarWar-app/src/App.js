import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(null);

	const movieDataHandler = useCallback(() => {
		console.log("running");
		setIsLoading(true);
		fetch("https://swapi.dev/api/films")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Something went WRONG");
				}
				return response.json();
			})
			.then((data) => {
				const transformedMovies = data.results.map((movieData) => {
					return {
						id: movieData.id,
						title: movieData.title,
						releaseDate: movieData.release_date,
						openingText: movieData.opening_crawl,
					};
				});
				setMovies(transformedMovies);
				setIsLoading(false);
			})
			.catch((error) => {
				setHasError(error.message);
			});
		// setIsLoading(false);
	}, []);

    useEffect(() => {
		movieDataHandler();
	}, [movieDataHandler]);

	// async function movieDataHandler() {
	// 	setIsLoading(true);
	// 	try {
	// 		const response = await fetch("https://swapi.dev/api/films");
	// 		if (!response.ok) {
	// 			throw new Error("Something went wrong!!!!!!!");
	// 		}
	// 		const data = await response.json();
	// 		const transformedMovies = data.results.map((movieData) => {
	// 			return {
	// 				id: movieData.id,
	// 				title: movieData.title,
	// 				releaseDate: movieData.release_date,
	// 				openingText: movieData.opening_crawl,
	// 			};
	// 		});
	// 		setMovies(transformedMovies);
	// 	} catch (error) {
	// 		setHasError(error.message);
	// 	}
	// 	setIsLoading(false);
	// }
	return (
		<React.Fragment>
			<section>
				<button onClick={movieDataHandler}>Fetch Movies</button>
			</section>
			<section>
				{!isLoading && movies.length > 0 && (
					<MoviesList movies={movies} />
				)}
				{!isLoading && !hasError && movies.length === 0 && (
					<p>Found no movie</p>
				)}
				{!isLoading && hasError && <p>{hasError}</p>}
				{isLoading && <p>Loading</p>}
			</section>
		</React.Fragment>
	);
}

export default App;
