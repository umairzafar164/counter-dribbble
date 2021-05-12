import { useState } from 'react';
import './App.css';
import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from 'react-icons/md';
function Counter() {
  const [number, setNumber]=useState(0);
  const previous=()=>{setNumber(number-1)}
  const next=()=>{setNumber(number+1)}

  return (

    <div className='main-div' >
      <div className='small-div'>
        <button onClick={previous} style={{cursor:'pointer'}} disabled={number===0} className='button'><MdKeyboardArrowLeft className='arrow'/></button>
        <span className='span'><h1 className='heading'>{number}</h1></span>
        <button onClick={next} className='button' style={{cursor:'pointer'}}> <MdKeyboardArrowRight className='arrow'/></button>
      </div>
    </div>
  );
}

export default Counter;
