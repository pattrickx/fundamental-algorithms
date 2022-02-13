import React, { useState } from 'react';
import "./styles.css";

function PrimeCard() {
  const [number,setNumber]= useState(null)
  const [resultMessenger,setResultMessenger]= useState("")

  function Prime(){
    
    for(let i=2; i<number ; i++)
      if(number%i===0)
        return false
    
    return number>1

  }
  
  function handleClick(){
    const IsPrime = Prime()
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