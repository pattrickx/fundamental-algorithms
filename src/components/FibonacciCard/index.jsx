import React, { useState } from 'react';
import './styles.css';

function FibonacciCard() {
    const [number,setNumber]= useState(0)
    const [resultMessenger,setResultMessenger]= useState("")
    function Fibonacci(){
        let previous_1=1
        let previous_2=-1
        let list_messenger=""
        for(let i=0;i<number;i++){
            let result_sum = previous_1+previous_2
            list_messenger += list_messenger?", "+result_sum:result_sum
            previous_2 = previous_1
            previous_1 = result_sum
            
        }
        setResultMessenger(list_messenger)
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