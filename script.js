const colorCodeContainer = document.getElementById('color-code')
const scoreContainer = document.getElementById('score')
let randomColor = null
let score = 0
const optionsContainer = document.getElementById('options-container')

function generateRandomNumbersBetween(min,max){
  return    min + Math.floor(Math.random() * max - min + 1)
}


function generateRandomColorRGB(){
       const red = generateRandomNumbersBetween(0 , 255);
       const green = generateRandomNumbersBetween(0 , 255);
       const blue = generateRandomNumbersBetween(0 , 255);
       return `rgb(${red}, ${green}, ${blue})`
}

function startGame(){
       score = Number(window.localStorage.getItem('score')) ?? 0 
       optionsContainer.innerHTML = null
       randomColor  = generateRandomColorRGB()
       colorCodeContainer.innerText = randomColor
       
       const ansIndex = generateRandomNumbersBetween(0,4)

       for(let i=0;i<5;i++){
              const div = document.createElement('div')
              div.addEventListener('click', validateResult)
              div.style.backgroundColor = i === ansIndex ? randomColor :  generateRandomColorRGB()
              optionsContainer.append(div)
       }
       scoreContainer.innerText = score
       
}

window.addEventListener('load',()=> startGame())
function incrementScore(){
       score++;
       scoreContainer.innerText = score
}



function validateResult(el){

       const selectColor = el.target.style.backgroundColor

       if(selectColor==randomColor){
              incrementScore()
       }else{
              score = 0
       }
       window.localStorage.setItem('score',score)
       startGame()


}