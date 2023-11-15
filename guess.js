
let inputValue = document.getElementById('guess')
let text = document.getElementById('middle')
let container = document.getElementById('container')
let legend = document.getElementById('legend')
let score = document.getElementById('score')
let del = document.getElementById('del')
let fig = 0


if(inputValue.value == ''){
    text.innerHTML = 'Pick a Num from 0-10'
}



 

let  guessNum = ()=> {

let random_number = Math.floor(Math.random() * 10) 
score.innerHTML = ` ${fig}`


inputValue.value == random_number ?   text.innerHTML = `Correct Answer ${random_number} , You WON! ` : text.innerHTML = `You are Wrong, the answer is ${random_number}`
if(text.innerHTML == `Correct Answer ${random_number} , You WON! `) { score.innerHTML = ` ${++fig}` }  


}

let  guess = (num) => {
    inputValue.value = num
}


let Del = () =>  {
    fig = 0
    text.innerHTML  = ''
    score.innerHTML = ` ${fig}`
     inputValue.value = inputValue.value.slice(0,0)
     text.innerHTML = 'Pick a Num from 0-9'
  
 }



let minimize = () => { 
  container.style.visibility = 'hidden'
}

 
let maximize = () => {
    container.style.visibility = 'visible'
}

let cancel = () => {
    legend.style.display = 'none'
    container.style.display = 'none'
}
