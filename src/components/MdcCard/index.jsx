import { clear } from '@testing-library/user-event/dist/clear';
import React, { useEffect, useState } from 'react';

import './styles.css';

function MdcCard() {
    const [number,setNumber]= useState(null)
    const [numbers,setNumbers]= useState([])
    const [inputNumbers,setInputNumbers] = useState("")
    const [resultMessenger,setResultMessenger]= useState(null)
    function Mdc(){

        let minNumber = numbers.sort((a,b)=>a-b)[0]
        // console.log(minNumber)
        for(let i=minNumber;i>0;i--){

            let finish=true
            for(let j = 0;j<numbers.length;j++){
                if(numbers[j]%i !== 0){
                    finish=false
                    break                  
                }
            }
            if(finish){
                setResultMessenger(i)
                break
            }
            
        }

    }
    useEffect(()=>{
        if(numbers.length>0)
            Mdc()
    },[numbers])

    function handleAdd(){
        let newList= [...numbers,Number(number)]
        setNumbers(newList)
        setInputNumbers(inputNumbers?inputNumbers+"+ "+number:number)
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
                <button onClick={()=>Clear()}>
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