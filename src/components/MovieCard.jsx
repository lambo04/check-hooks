import React from 'react';
import { Card, Rate } from 'antd';
import "../App.css"

const MovieCard = ({ movie }) => {
  return (
    <Card
      cover={<img alt={movie.title} src={movie.posterUrl} />}
      title={movie.title}
    >
      <p>{movie.description}</p>
      <Rate disabled value={movie.rate} />
      <p>Note : {movie.rate}</p> {/* Suppression de toFixed ici */}
    </Card>
  );
};

export default MovieCard;
