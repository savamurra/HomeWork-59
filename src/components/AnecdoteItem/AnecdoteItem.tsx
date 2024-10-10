import { useEffect, useState } from 'react';
import AnecdoteBtn from '../AnecdoteBtn/AnecdoteBtn.tsx';

const AnecdoteItem = () => {
  const [anecdote, setAnecdote] = useState<{ id: string; value: string }[]>([])

  const fetchAnecdotes = async (count: number) => {
    const promise = []
    for (let i = 0; i < count; i++) {
      promise.push(await fetch(`https://api.chucknorris.io/jokes/random`).then(
        res => res.json()
      ))
    }
    const results = await Promise.all(promise);

    setAnecdote(results);
  }


  useEffect(() => {
    void fetchAnecdotes(5)
  }, []);


  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="card m-auto mt-4 p-3" style={{width: '500px'}}>
        {anecdote.map((item) => (
          <div key={item.id}>
            <li>{item.value}</li>
          </div>
        ))}
      </div>
      <AnecdoteBtn newAnecdote={() => fetchAnecdotes(5)}/>
    </div>
  );
};

export default AnecdoteItem;