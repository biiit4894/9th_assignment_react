import React from 'react';
import Hello from './Hello';
import logo from './logo.svg';
import './App.css';


function App() { 
  const name = '안현주';
  const style = {
    backgroundColor : 'skyblue',
    color : 'white',
    fontsize : 24,
    padding : '1rem'
  }


  return (
    <>
      <Hello/>
      <div style={style}>{name}</div>
      <div class='pink-box'></div>
    </>

  );
}

export default App;
