import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const count = 10
  for (let i = 0; i < count; i++) {
          
  }
  return (
    <div className="App">
      
      <header className="App-header">
        
        <LikeButton/>
      </header>
    </div>
  );
}

function LikeButton(){
  const count = 999;
  return <span className='likeButton'>♡{count}</span>
}

export default App;
