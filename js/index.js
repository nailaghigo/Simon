var colors = ['red', 'green', 'blue', 'yellow']
var simonSequence = []
var playerClickCount = 0
var counterLevel = 0
var isGameStarted = false
var currentPlayer = 'computer'

var startGameButton = document.querySelector('.start-button')
var square = document.querySelector('.container')

function handlePlayerClick (e) {
  if (currentPlayer === 'player') {
    playerClickCount++
    var squareColor = e.target.classList[1]

    if (simonSequence[playerClickCount - 1].color !== squareColor) {
      // END GAME
      alert("Game Over! Try again.");
      simonSequence = []
      playerClickCount = 0
      counterLevel = 0
      isGameStarted = false
      startGameButton.disabled = false
      currentPlayer = 'computer'
    }

    if (playerClickCount === simonSequence.length) {
      currentPlayer = "computer"; // Cambia el turno a la computadora
      setTimeout(nextRound, 1000);
    }
  }
}

function checkPattern() {
  for (var i = 0; i < playerSequence.length; i++) {

    if (playerSequence[i] !== simonSequence[i]) {
      return false;
    }
  }
  return true;
}

function nextColor() {
  var index = Math.floor(Math.random() * colors.length)
  var color = colors[index]

  return {index, color}
}

function highlightedColor(i, color) {
  if (i === simonSequence.length - 1) {
    nextLevel()
  }

  setTimeout(function () {
    var selectedColor = document.querySelector('#' + color)
    selectedColor.classList.add('highlighted')

    setTimeout(function(){
      selectedColor.classList.remove('highlighted')

    }, 500)
  }, (i + 1) * 600)
}

function nextLevel() {
  counterLevel += 1
  document.querySelector('.level-counter').innerHTML = counterLevel
  currentPlayer = currentPlayer === 'computer' ? 'player' : 'computer'

  nextRound()
}

function nextRound()  {
  if (!isGameStarted){
    isGameStarted = true
    startGameButton.disabled = true
  }

  if (currentPlayer === 'computer'){
    var color = nextColor()

    simonSequence.push(color)

    for (var i = 0; i < simonSequence.length; i++) {
      highlightedColor(i, simonSequence[i].color)
    }

    playerClickCount = 0
  }
}

square.addEventListener('click', handlePlayerClick)
startGameButton.addEventListener('click', nextRound)
