import { MovieTypes } from "../../types";
import * as React from "react";
import { useEffect, useState } from "react";

interface Props {
  movie: MovieTypes[];
  onDeleteMovie: (id: string) => void;
}
const MovieItem: React.FC<Props> = React.memo(
  ({ movie, onDeleteMovie }) => {
    const [editedMovie, setEditedMovie] = useState<MovieTypes[]>([]);

    useEffect(() => {
      setEditedMovie(movie);
    }, [movie]);

    const changeMovie = (
      e: React.ChangeEvent<HTMLInputElement>,
      id: string,
    ) => {
      setEditedMovie((prevState) =>
        prevState.map((movie) =>
          movie.id === id ? { ...movie, title: e.target.value } : movie,
        ),
      );
    };

    return (
      <>
        {editedMovie.map((item) => (
          <div key={item.id + item.number} className="card w-50 m-auto mt-4">
            <div className="card-header">
              <button
                key={item.id}
                type="button"
                className="btn-close"
                onClick={() => onDeleteMovie(item.id)}
              ></button>
            </div>
            <div className="card-body">
              <input
                type="text"
                className="w-100 form-control"
                key={item.id}
                value={item.title}
                id="title"
                onChange={(e) => changeMovie(e, item.id)}
              />
            </div>
          </div>
        ))}
      </>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.movie === nextProps.movie;
  },
);

export default MovieItem;
