# Algoritimos fundamentais cadeira de Ambiente de desenvolvimento de Software.
Front-end para acesso aos algoritimos esta rodando na Vercel no [link](https://fundamental-algorithms.vercel.app/) 

## Algoritimo de Contagem
Esse algoritimo esta definido para fazer contagem de numeros maiores que 5, ao adicionar um valor e clicar no botão ADD sera verificado se esse valor é maior que o limiar e o acrecentara a contagem, exemblo a baixo, ao clicar em clear a lista de valores sera resetada

<div align="center">
<img src="https://user-images.githubusercontent.com/32752004/160951687-a7b3992e-d1b6-449c-b8b1-a6bdb47c0741.png">
</div>

### Codigo

``` javascript
export const contFunc=(number)=>{
    if(number>5) 
        return true
    return false 
}
```
## Algoritmo de Fibonacci

Para esse card do algoritmo so é preciso adicionar o numero de digitos da sequencia que se deseja ver e clicar em run, assim sera gerado o resultado como o a seguir 

<div align="center">
<img src="https://user-images.githubusercontent.com/32752004/160951952-2359e331-e94d-4c1c-823b-8840dcb2fa67.png">
</div>

### Codigo

``` javascript
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
```
## Algortimo de MDC

Nesse card pode ser adicionar "n" numeros e se tem como resultado o maximo divisor comum para todos.

<div align="center">
<img src="https://user-images.githubusercontent.com/32752004/160952914-0baaae70-6279-4aa0-a051-c98b9563e4a6.png">
</div>

### Codigo

``` javascript

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
```

## Algoritimo de identificação de Numeros Primos
Nesse card é passado um numero inteiro qualquer e então é retornado se o valor é um numero primo ou não 

<div align="center">
<img src="https://user-images.githubusercontent.com/32752004/160952718-061dc7ae-0f59-4cd6-918f-bf5a265dd095.png">
<img src="https://user-images.githubusercontent.com/32752004/160952777-6e408f40-96b6-4399-8835-ff6cf9022693.png">
</div>


### Codigo

``` javascript
export const primeFunc=(number)=>{
    for(let i=2; i<number ; i++)
        if(number%i===0)
            return false
    
    return number>1
}
```

## Algoritimo de Quicksort

Nesse card se deve passar uma lista de numeros separados por virgola os quais seram ordenados do menor para o maior como mostrado a seguir.

<div align="center">
<img src="https://user-images.githubusercontent.com/32752004/160952619-107a9f0a-5cdd-4b8d-9bb3-16ea55eca4e1.png">
</div>

### Codigo

``` javascript
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
```
## Algoritimo de soma

Nesse card se deve adicionar um numero de cada vez com o add esses valores vão ser somados como mostrado a baixo, clear limpa os numeros ja digitados.

<div align="center">
<img src="https://user-images.githubusercontent.com/32752004/160952521-d40f9def-9f82-4ef3-99a7-a01528995905.png">
</div>

### Codigo

``` javascript
export const sunFunc=(n1,n2)=>{
    return n1+n2
}
```

## Testes
para rodar basta:
``` 
npm install
npm test
```
exemplo de resultado:

![image](https://user-images.githubusercontent.com/32752004/170402689-8e2ba976-9576-41e5-9000-b00cf20fe318.png)
