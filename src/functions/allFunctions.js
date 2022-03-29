export const contFunc=(number)=>{
    if(number>5) 
        return true
    return false 
}

export const fibonacciFunc=(number)=>{
    let previous_1=1
    let previous_2=-1
    let list_messenger=""
    for(let i=0;i<number;i++){
        let result_sum = previous_1+previous_2
        list_messenger += list_messenger?", "+result_sum:result_sum
        previous_2 = previous_1
        previous_1 = result_sum
    }
    return list_messenger
}

export const mdcFunc=(numbers)=>{
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
            return i
        }
        
    }
}

export const primeFunc=(number)=>{
    for(let i=2; i<number ; i++)
        if(number%i===0)
            return false
    
    return number>1
}

export const quicksortFunc=(listNumber)=>{
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

    return[...quicksortFunc(left),...center,...quicksortFunc(rigth)]
}

export const sunFunc=(n1,n2)=>{
    return n1+n2
}