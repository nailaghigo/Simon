var colors = ['red', 'green', 'blue', 'yellow']
var simonSequence = []
var playerClickCount = 0
var counterLevel = 0
var isGameStarted = false
var currentPlayer = 'computer'

var startGameButton = document.querySelector('.start-button')
var square = document.querySelector('.container')
var levelText = document.querySelector('.level-counter')

square.addEventListener('click', handlePlayerClick)
startGameButton.addEventListener('click', nextRound)

function resetGame () {
  simonSequence = []
  playerClickCount = 0
  counterLevel = 0
  isGameStarted = false
  startGameButton.disabled = false
  currentPlayer = 'computer'
}

function handlePlayerClick (e) {
  if (currentPlayer === 'player') {
    playerClickCount++
    var squareColor = e.target.classList[1]
    highlightColor(squareColor)

    if (simonSequence[playerClickCount - 1].color !== squareColor) {
      alert('Game Over! Try again.')
      resetGame()
    }

    if (playerClickCount === simonSequence.length) {
      currentPlayer = 'computer'
      setTimeout(nextRound, 1000)
    }
  }
}

function checkPattern() {
  for (var i = 0; i < playerSequence.length; i++) {

    if (playerSequence[i] !== simonSequence[i]) {
      return false
    }
  }
  return true
}

function nextColor() {
  var index = Math.floor(Math.random() * colors.length)
  var color = colors[index]

  return {index, color}
}

function highlightColor (color) {
  var selectedColor = document.querySelector('#' + color)
  selectedColor.classList.add('highlighted')

  setTimeout(function(){
    selectedColor.classList.remove('highlighted')
  }, 500)
}

function highlightNextColor(i, color) {
  if (i === simonSequence.length - 1) {
    nextLevel()
  }

  setTimeout(function () {
    highlightColor(color)
  }, (i + 1) * 600)
}

function nextLevel() {
  counterLevel += 1
  levelText.innerHTML = counterLevel
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
      highlightNextColor(i, simonSequence[i].color)
    }

    playerClickCount = 0
  }
}
