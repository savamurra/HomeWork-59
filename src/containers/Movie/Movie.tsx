import MovieForm from '../../components/MovieForm/MovieForm.tsx';
import { useState } from 'react';
import { MovieTypes } from '../../types';
import MovieItem from '../../components/MovieItem/MovieItem.tsx';

const Movie = () => {
  const [movies, setMovies] = useState<MovieTypes[]>([]);


  const addNewMovie = (newMovie: MovieTypes) => {
    setMovies((prevState) => [...prevState, newMovie]);
  }

  const deleteMovieCard = (id: string) => {
    const copyMovie = movies.filter(movie => movie.id !== id);

    setMovies(copyMovie);
  };
  return (
    <>
      <div className='container'>
        <MovieForm addNewMovie={addNewMovie} />
        <MovieItem movie={movies} onDeleteMovie={deleteMovieCard}/>
      </div>
    </>
  );
};

export default Movie;