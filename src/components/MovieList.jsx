import React from 'react';
import MovieCard from './MovieCard';
import "../App.css"


const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard  movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
