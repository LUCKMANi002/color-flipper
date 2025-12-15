




   /*hii ni namna ya kustyle Dom na aiitaji kuweka code kwenye 
    html wala css wala kuivuta popote unaandika tu
  //document.body.style.color = `rgb(${r}, ${g}, ${b})`*/



/*const position = document.getElementById("position")
  const r = 128
  const g = 255
  const b = 0*/

/*const position = document.getElementById("position")
  const r = 25
  const g = 205
  const b = 100*/

/*const position = document.getElementById("position")
  const r = 255
  const g = 255
  const b = 0*/

const position = document.getElementById("position")
const flipButton = document.getElementById("flip-button")


flipButton.addEventListener("click", function(){
    
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  position.style.backgroundColor= `rgb(${r}, ${g}, ${b})`;
})

