import React, { useState } from 'react';

// import { Container } from './styles';

function QuicksortCard() {
    const [inputString,setInputString]= useState("")
    const [outputArray,setOutputArray]= useState("")

    function getList(){
        const listNumber = inputString.split(",")
                                        .filter(x=>!isNaN(x) && x!=" " && x!="")
                                        .map(x=>{return parseFloat(x)})
        return listNumber
    }


    function Quicksort(listNumber){
        
        if (listNumber.length <=1)
            return listNumber
        let pivot= listNumber[0]
        let left = []
        let center = []
        let rigth = []
        for( let n of listNumber ){
            if(n<pivot) left.push(n)
            if(n>pivot) rigth.push(n)
            if(n==pivot) center.push(n)
        }

        return[...Quicksort(left),...center,...Quicksort(rigth)]
    }
    function handleClick(){

        setOutputArray(Quicksort(getList()).join(', '))
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