 const square = document.getElementById('color')
 function generateColor (){
    const letters =  '0123456789ABCDEF'
     let colors = '#'
     for (let i = 0 ; i < 6; i++){
         colors += letters [Math.floor(Math.random() *16)]
     }
     return colors
 }
 square.addEventListener('click', function () {
     const newColor = generateColor()
     square.style.backgroundColor = newColor
     if (newColor.includes('F')){
         alert('GAME OVER')
     }
 })