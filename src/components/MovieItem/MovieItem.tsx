import { MovieTypes } from '../../types';
import * as React from 'react';

interface Props {
  movie: MovieTypes[]
  onDeleteMovie: (id: string) => void
}
const MovieItem: React.FC<Props> = ({movie, onDeleteMovie}) => {

  console.log(movie)
  return (
    <>
      {movie.map((item) => (
        <div key={item.id + item.number} className="card w-25 m-auto mt-4">
          <div className="card-header">
            <button key={item.id}
                    type="button"
                    className="btn-close"
                    onClick={() => onDeleteMovie(item.id)}></button>
          </div>
          <div className="card-body">
            <label key={crypto.randomUUID()} htmlFor="title">Title</label>
            <input type="text"
                   className="w-100"
                   key={item.id}
                   value={item.title}
                   id='title'
            />
          </div>
        </div>
      ))}
    </>
  );

};

export default MovieItem;