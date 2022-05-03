import { clear } from '@testing-library/user-event/dist/clear';
import React, { useEffect, useState } from 'react';
import { mdcFunc } from '../../functions/allFunctions';

import './styles.css';

function MdcCard() {
    const [number,setNumber]= useState(null)
    const [numbers,setNumbers]= useState([])
    const [inputNumbers,setInputNumbers] = useState("")
    const [resultMessenger,setResultMessenger]= useState(null)

    useEffect(()=>{
        if(numbers.length>0)
            setResultMessenger(mdcFunc(numbers))
    },[numbers])

    function handleAdd(){
        let newList= [...numbers,Number(number)]
        setNumbers(newList)
        setInputNumbers(inputNumbers?inputNumbers+" "+number:number)
    }
    function Clear(){
        setNumbers([])
        setInputNumbers("")
        setResultMessenger("")
    }
    return (
        <div className="container">
            <h1>MDC</h1>
            <div className='inputContainer'>
                <input type="number" value={number} onChange={(event)=>setNumber(event.target.value)} />
                <button onClick={()=>handleAdd()}>
                    ADD
                </button>
                <button className='clear' onClick={()=>Clear()}>
                    Clear
                </button>
            </div>
            
            <div className='outputContainer'>
                <label className='inputNumbersMdc'>{inputNumbers}</label>
                <label className='resultMdc'>{resultMessenger}</label>
            </div>
        </div>
        );
}

export default MdcCard;
