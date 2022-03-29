import React, { useState } from 'react';
import { sunFunc } from '../../functions/allFunctions';
import "./styles.css"
// import { Container } from './styles';

function SumCard() {
    const [number,setNumber]= useState(0)
    const [resultMessenger,setResultMessenger]= useState(null)
    const [inputNumbers,setInputNumbers] = useState("")
    function Sum(){
        setResultMessenger(sunFunc(Number(resultMessenger),Number(number)))
        setInputNumbers(inputNumbers?inputNumbers+"+ "+number:number)
        
    }
    function Clear(){
        setResultMessenger(0)
        setInputNumbers("")
    }
    return (
    <div className="container">
        <h1>Sum Numbers</h1>
        <div className='inputContainer'>
            <input type="number" value={number} onChange={event=>setNumber(event.target.value)} />
            <button onClick={()=>Sum()}>
                ADD
            </button>
            <button className='clear' onClick={()=>Clear()}>
                Clear
            </button>
        </div>
        <div className='outputContainer'>
            <label className='inputNumbers'>{inputNumbers}</label>
            <label className='resultSum'>{resultMessenger}</label>
        </div>
    </div>
    );
}

export default SumCard;