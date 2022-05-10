import React, { useState } from "react"
import logo from './logo.svg';
import Spinner from "./components/Spinner";
import MovieList from "./components/MovieList";
import './App.css';

function App() {
  const [spinner, setSpinner] = useState(false) // hook 
  const [showMovies, setShowMovies] = useState(true);

  const toggleShowMovies = () => {
    setShowMovies(!showMovies);
  };

  if (spinner) {
    return <Spinner></Spinner>
  } else {
    return (
      <div className="App">
        <button onClick={toggleShowMovies}>{showMovies ? 'Hide' : 'Show'}</button>
        {showMovies && <MovieList />}
      </div>
    );
  }
}

export default App;
