var simonSequence = [];
var gamerSequence = [];
var counterLevel = 0;


var startGameButton = document.querySelector('.start-button')

function nextColor() {
  var colors = ['red', 'green', 'blue', 'yellow']
  var randomColor = colors[Math.floor(Math.random() * colors.length)]

  return randomColor
}

function highlightedColor(color) {
  var color = document.querySelector(`#${color}`)

  color.classList.add('highlighted')

  setTimeout(function(){
    color.classList.remove('highlighted')
  },500)
}

function nextLevel() {
  counterLevel += 1;
  var nextSequence = [...simonSequence]

  nextSequence.push(nextColor());
}

function startGame()  {
  startGameButton.disabled = true;
}

startGameButton.addEventListener('click', startGame)