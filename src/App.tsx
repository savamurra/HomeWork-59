import Movie from './containers/Movie/Movie.tsx';
import Anecdote from './containers/Anecdote/Anecdote.tsx';
import { useState } from 'react';


const App = () => {

  const [changeComponents, setChangeComponents] = useState<boolean>(false);


  return (
  <>
    <div className="container d-flex flex-column align-items-center">
      <button className="btn btn-primary mt-4" style={{width: '100px'}} onClick={() => setChangeComponents(!changeComponents)}>{changeComponents ? 'Anecdote' : 'Movies'}</button>
      {changeComponents ? <Anecdote/> : <Movie/>}
    </div>
  </>
  )
};

export default App
