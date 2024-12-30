import React, { useState } from 'react';
import MovieCard from './components/MovieCard';
import RatingFilter from './components/RatingFilter';
import moviesData from './moviesData';
import AddMovieModal from './components/AddMovie';
import TitleFilter from './components/Filter';
import "./App.css"
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [filterRating, setFilterRating] = useState(0); // État pour filtrer par étoiles
  const [filterTitle, setFilterTitle] = useState("");


  // Fonction pour ajouter un nouveau film
  const onAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]); // Ajoute le nouveau film à la liste
  };

  // Fonction pour filtrer par étoiles
  const handleFilterRating = (value) => {
    setFilterRating(value);
  };
  const handleFilterTitle = (value) => {
    setFilterTitle(value);
  };
  const filteredMovies = movies.filter((movie) => movie.rate >= filterRating);

  const titleFilteredMovies = filteredMovies.filter((movie) =>
    movie.title.toLowerCase().includes(filterTitle.toLowerCase())
  );

  // Filtrage des films selon le rating

  return (
    <div className="App">
      <h1>Movie App</h1>
      <RatingFilter filterRating={filterRating} setFilterRating={handleFilterRating} />
      <AddMovieModal onAddMovie={onAddMovie}/>
      <TitleFilter filterTitle={filterTitle} setFilterTitle={handleFilterTitle}/>
      <div className="movie-list">
        {titleFilteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    
      </div>
    </div>
  );
}

export default App;
