import React from 'react';
import './App.css';
import ImageCard from './ImageCard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ImageCard imgSrc={"./dark_example.png"} />
      </header>
    </div>
  );
}

export default App;
