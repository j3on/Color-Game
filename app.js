let colors = [
   "rgb(255, 0, 0)",
   "rgb(255, 255, 0)",
   "rgb(0, 255, 0)",
   "rgb(0, 255, 255)",
   "rgb(0, 0, 255)",
   "rgb(255, 0, 255)"
]
let square = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('.colorDisplay');
let correctColor = colors[3];

for(let i = 0; i < colors.length; i++){
   square[i].style.backgroundColor = colors[i];

   square[i].addEventListener('click', function(){
      let clickedColor = this.style.backgroundColor;

      if(clickedColor === correctColor){
         alert("Correct");
      }
      else {
         alert("Wrong");
      }
   })
}
