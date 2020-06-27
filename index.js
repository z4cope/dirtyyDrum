
var numberOfDrums  = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function (){

    var clickedButton = this.innerHTML;
    pressedKey(clickedButton);

  });

}

document.addEventListener("keydown", function (event) {
  pressedKey(event.key);
})

function pressedKey(key) {

  switch (key) {
    case clickedButton = "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case clickedButton = "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case clickedButton = "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case clickedButton = "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case clickedButton = "j":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case clickedButton = "k":
      var crush = new Audio("sounds/crash.mp3");
      crush.play();
      break;
    case clickedButton = "l":
      var snare = new Audio("sounds/snore.mp3");
      snare.play();
      break;
    default:(console.log(clickedButton))
  }

}
