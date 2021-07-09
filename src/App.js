// next 33/3
import React from 'react'
import './App.css'
import MovieCounter from './components/MovieCounter';
import Nayok from './components/Nayok'

function App() {

  const nayoks = ['SAFI', 'LARK', 'JACK', 'MONA']
  
  return (
    <div className="App">
      <MovieCounter />
      <Nayok name={nayoks[0]} age="25" />
      <Nayok name={nayoks[1]} />
      <Nayok name={nayoks[2]} />
      <Nayok name={nayoks[3]} />
    </div>
  );
}

export default App;