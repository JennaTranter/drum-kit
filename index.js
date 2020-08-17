// Detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

// Detecting keyboard press

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {
  switch (key) {
    case "w":
      var audioCrash = new Audio('sounds/crash.mp3');
      audioCrash.play();
      break;

    case "a":
      var audioKick = new Audio('sounds/kick-bass.mp3');
      audioKick.play();
      break;

    case "s":
      var audioSnare = new Audio('sounds/snare.mp3');
      audioSnare.play();
      break;

    case "d":
      var audioTom1 = new Audio('sounds/tom-1.mp3');
      audioTom1.play();
      break;

    case "j":
      var audioTom2 = new Audio('sounds/tom-2.mp3');
      audioTom2.play();
      break;

    case "k":
      var audioTom3 = new Audio('sounds/tom-3.mp3');
      audioTom3.play();
      break;

    case "l":
      var audioTom4 = new Audio('sounds/tom-4.mp3');
      audioTom4.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
