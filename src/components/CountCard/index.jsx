import React, { useState } from 'react';

import './styles.css';

function CountCard() {
    const [number,setNumber]= useState(null)
    const [resultMessenger,setResultMessenger]= useState(null)
    const [inputNumbers,setInputNumbers] = useState(null)

    function Count(){
        setInputNumbers(inputNumbers?inputNumbers+", "+number:number)
        if (Number(number)>5){
            setResultMessenger(resultMessenger+1)
        }

    }

    function Clear(){
        setResultMessenger(null)
        setInputNumbers(null)
    }
  return (
    <div className="container">
        <h1>Count</h1>
        <label className='inputNumbers'>counts if the number is bigger than 5</label>
        <div className='inputContainer'>
            <input type="number" value={number} onChange={event=>setNumber(event.target.value)} />
            <button onClick={()=>Count()}>
                ADD
            </button>
            <button className='clear' onClick={()=>Clear()}>
                Clear
            </button>
        </div>
        <div className='outputContainer'>
            <label className='inputNumbers'>{inputNumbers}</label>
            <label className='resultCount'>{resultMessenger}</label>
        </div>
    </div>
    );
}

export default CountCard;