import { MovieTypes } from '../../types';
import * as React from 'react';

interface Props {
  movie: MovieTypes[]
}
const MovieItem: React.FC<Props> = ({movie}) => {

  console.log(movie)
  return (
    <>
      {movie.map((item) => (
        <div className="card w-25 m-auto mt-4">
          <div className="card-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="card-body">
            <label htmlFor="title">Title</label>
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