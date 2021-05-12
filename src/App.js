import { useState } from 'react';
import './App.css';

function Counter() {
  const [number, setNumber]=useState(0);
  const previous=()=>{setNumber(number-1)}
  const next=()=>{setNumber(number+1)}

  return (

    <div className='main-div' >
      <div className='small-div'>
        <button onClick={previous} disabled={number===0}>-</button>
        <h1>{number}</h1>
        <button onClick={next}>+</button>
      </div>
    </div>
  );
}

export default Counter;
