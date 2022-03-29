import React, { useState } from 'react';
import { primeFunc } from '../../functions/allFunctions';
import "./styles.css";

function PrimeCard() {
  const [number,setNumber]= useState(null)
  const [resultMessenger,setResultMessenger]= useState("")
  
  function handleClick(){
    const IsPrime = primeFunc(number)
    setResultMessenger(IsPrime?"Is Prime":"Is Not Prime")
  }

  return (
    <div className="container">
      <h1>Prime Number</h1>
      <div className='inputContainer'>
        <input type="number" value={number} onChange={event=>setNumber(event.target.value)} />
        <button onClick={()=>handleClick()}>
          RUN
        </button>
      </div>
        
      <label className='result'>{resultMessenger}</label>
    </div>
  );
}

export default PrimeCard;