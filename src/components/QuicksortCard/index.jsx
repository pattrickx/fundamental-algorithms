import React, { useState } from 'react';
import { quicksortFunc } from '../../functions/allFunctions';
import './styles.css';

function QuicksortCard() {
    const [inputString,setInputString]= useState("")
    const [outputArray,setOutputArray]= useState("")

    function getList(){
        const listNumber = inputString.split(",")
                                        .filter(x=>!isNaN(x) && x!=" " && x!="")
                                        .map(x=>{return parseFloat(x)})
        return listNumber
    }

    function handleClick(){
        setOutputArray(quicksortFunc(getList()).join(', '))
    }
    return (
        <div className="container">
        <h1>Quicksort</h1>
        <div className='inputContainer'>
            <input type="text" value={inputString} onChange={event=>setInputString(event.target.value)} />
            <button onClick={()=>handleClick()}>
                RUN
            </button>
        </div>
        
        <label className='resultQuicksort'>{outputArray}</label>
    </div>);
}

export default QuicksortCard;