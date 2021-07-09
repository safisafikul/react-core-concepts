// next 33/3
import React from 'react'
import './App.css'
import MovieCounter from './components/MovieCounter'
// import FirstNayok from './components/FirstNayok'
// import NayokMap from './components/NayokMap'
import NayokUseEffect from './components/NayokUseEffect'


function App() {  
  return (
    <div className="App">
      <MovieCounter />
      <NayokUseEffect />

      {/* <NayokMap /> */}
      {/* <FirstNayok /> */}
    </div>
  )
}

export default App