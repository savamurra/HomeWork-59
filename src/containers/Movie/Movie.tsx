import MovieForm from "../../components/MovieForm/MovieForm.tsx";
import { useState } from "react";
import { MovieTypes } from "../../types";
import MovieItem from "../../components/MovieItem/MovieItem.tsx";

const Movie = () => {
  const [movies, setMovies] = useState<MovieTypes[]>([]);

  const addNewMovie = (newMovie: MovieTypes) => {
    setMovies((prevState) => [...prevState, newMovie]);
  };

  const deleteMovieCard = (id: string) => {
    const copyMovie = movies.filter((movie) => movie.id !== id);

    setMovies(copyMovie);
  };

  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <div
          className="w-50 mt-4 p-4 border"
          style={{ boxShadow: "1px 3px 3px 1px #ccc" }}
        >
          <MovieForm addNewMovie={addNewMovie} />
          <MovieItem movie={movies} onDeleteMovie={deleteMovieCard} />
        </div>
      </div>
    </>
  );
};

export default Movie;
