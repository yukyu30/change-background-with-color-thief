import React from 'react';
import './App.css';
import ImageCard from './ImageCard';


function App() {
  const images =["./white_example.png", "./light_example.png", "./dark_example.png"]
  return (
    <div className="App">
      <header className="App-header">
      <div className="grid">
          {images.map((image) => {
            return (<ImageCard imgSrc={image} /> )
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
