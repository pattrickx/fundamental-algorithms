import React, { useState } from 'react';
import { fibonacciFunc } from '../../functions/allFunctions';
import './styles.css';

function FibonacciCard() {
    const [number,setNumber]= useState(0)
    const [resultMessenger,setResultMessenger]= useState("")
    function Fibonacci(){
        
        setResultMessenger(fibonacciFunc(number))
    }
    return  (
    <div className="container">
        <h1>Fibonacci</h1>
        <div className='inputContainer'>
            <input type="number" value={number} onChange={event=>setNumber(event.target.value)} />
            <button onClick={()=>Fibonacci()}>
                RUN
            </button>
        </div>
        
        <label className='resultFibonacci'>{resultMessenger}</label>
    </div>
    );
}

export default FibonacciCard;