import React, { useState } from 'react';

// import { Container } from './styles';

function QuicksortCard() {
    const [inputString,setInputString]= useState("")
    const [outputArray,setOutputArray]= useState("")
    function Quicksort(){
        const inputArray = inputString.split(",")


        

        setOutputArray("")
    }
    return (
        <div className="container">
        <h1>Quicksort</h1>
        <div className='inputContainer'>
            <input type="text" value={inputString} onChange={event=>setInputString(event.target.value)} />
            <button onClick={()=>Quicksort()}>
                RUN
            </button>
        </div>
        
        <label className='resultQuicksort'>{outputArray}</label>
    </div>);
}

export default QuicksortCard;