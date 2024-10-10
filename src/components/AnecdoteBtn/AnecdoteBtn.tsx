import * as React from 'react';

interface Props {
  newAnecdote: () => void;
}
const AnecdoteBtn: React.FC<Props> = ({newAnecdote}) => {

  return (
    <button type='button' className='btn btn-primary mt-4' onClick={newAnecdote}>New Anecdote</button>
  );
};

export default AnecdoteBtn;