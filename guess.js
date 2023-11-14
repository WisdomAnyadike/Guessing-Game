
let inputValue = document.getElementById('guess')
let text = document.getElementById('middle')
let container = document.getElementById('container')
let legend = document.getElementById('legend')


let  guessNum = ()=> {
let random_number = Math.floor(Math.random() * 10) 
inputValue.value == random_number ?   text.innerHTML = `You are correct` : text.innerHTML = `You are not correct, the answer is ${random_number}`
}

let  guess = (num) => {
    inputValue.value = num
}

let Del = () =>  {
   text.innerHTML  = ''
    inputValue.value = inputValue.value.slice(0,0)
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
