var colors = ['red', 'green', 'blue', 'yellow']
var simonSequence = []
var gamerSequence = []
var counterLevel = 0
var isGameStarted = false

var startGameButton = document.querySelector('.start-button')
var square = document.querySelector('.container')

function nextColor() {
  var index = Math.floor(Math.random() * colors.length)
  var color = colors[index]

  return {index, color}
}

function highlightedColor(i, color) {
  setTimeout(function () {
    var selectedColor = document.querySelector('#' + color)
    selectedColor.classList.add('highlighted')

    setTimeout(function(){
      selectedColor.classList.remove('highlighted')

      if (i === simonSequence.length - 1) {
        nextLevel()
      }
    }, 500)
  }, (i + 1) * 600)
}

function nextLevel() {
  counterLevel += 1
  document.querySelector('.level-counter').innerHTML = counterLevel
  nextRound()
}

function nextRound()  {
  var color = nextColor()

  if (!isGameStarted){
    isGameStarted = true
    startGameButton.disabled = true
  }

  if(counterLevel === 10) return false

  simonSequence.push(color)

  for (var i = 0; i < simonSequence.length; i++) {
    highlightedColor(i, simonSequence[i].color)
  }
}

startGameButton.addEventListener('click', nextRound)
