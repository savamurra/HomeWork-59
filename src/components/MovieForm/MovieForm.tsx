import { useState } from "react";
import { MovieTypes } from "../../types";
import * as React from "react";

interface Props {
  addNewMovie: (movie: MovieTypes) => void;
}

const MovieForm: React.FC<Props> = ({ addNewMovie }) => {
  const [newMovie, setNewMovie] = useState<MovieTypes>({
    title: "",
    id: "",
  });

  const changeMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMovie((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
        id: crypto.randomUUID(),
      };
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newMovie.title.trim().length > 0) {
      addNewMovie({
        ...newMovie,
        id: crypto.randomUUID(),
      });
    } else {
      alert("Заполните поле для ввода");
    }

    setNewMovie({
      title: "",
      id: "",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="container">
        <div className="form-group m-auto w-50 d-flex">
          <input
            onChange={changeMovie}
            value={newMovie.title}
            type="text"
            id="title"
            name="title"
            className="form-control"
            required
          />
          <button className="btn btn-primary w-25 ms-3">Add</button>
        </div>
      </div>
    </form>
  );
};

export default MovieForm;
