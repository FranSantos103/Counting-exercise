let startElement = document.getElementById('start')
let endElement = document.getElementById('end')
let stepElement = document.getElementById('step')
let phrase = document.getElementById('phrase')
let result = document.getElementById('result')

let button = document.getElementById('button')
button.addEventListener('click', count)

function count(){
    if(startElement.value === "" || endElement.value === "" || stepElement.value === ""){
        alert('Impossible to count. Please fill all fields.')
        return
    }
    let startValue = Number(startElement.value)
    let endValue = Number(endElement.value)
    let stepValue = Number(stepElement.value)

    phrase.innerHTML = 'Counting:'
    result.innerHTML = ""

    if (stepValue <= 0){
    alert("Step must be greater than 0. Using step = 1.")
    stepValue = 1

    for (let i = startValue; i <= endValue; i = i + stepValue){
    if(i !== endValue){
        result.innerHTML = result.innerHTML + `${i}, `
    } else {
        result.innerHTML = result.innerHTML+ `${i}`
    }
     }
     return

    }

   if(startValue > endValue){
    for (let i = startValue; i >= endValue; i = i - stepValue){
    if(i !== endValue){
        result.innerHTML = result.innerHTML + `${i}, `
    } else {
         result.innerHTML = result.innerHTML + `${i}`
    }
    }
    return
   }

    for (let i = startValue; i <= endValue; i = i + stepValue){
    if(i !== endValue){
        result.innerHTML = result.innerHTML + `${i}, `
    } else {
         result.innerHTML = result.innerHTML + `${i}`
    }
}


}




