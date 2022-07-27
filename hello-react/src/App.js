import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {
  const text = '응애'
  const condition = false
  
  const style = {
    backgroundColor: 'gray',
    border: '1px solid black',
    height: Math.round(Math.random() * 300) + 50,
    width: Math.round(Math.random() * 300) + 50,
    webkitTransition: 'all',
    MozTransition: 'all',
    msTransition: 'all'
  };

  return (
    <div className="my-div">
      <h1>리액트 응애</h1>
      <h2>{text}</h2>
      { condition && "참" }
      <div style={style}></div>
    </div>
  );
}

export default App;
