let score = 0

let handleAudio = () => {
  let audio = document.getElementById('blogoslawieni')
    
  if (!audio.paused) {
    if (audio.currentTime > 37) {
      audio.currentTime = 0
    }
  } else {
    audio.currentTime = 0
    audio.play()
  }
}

document.getElementById('baton').addEventListener('click', () => {
  score++
  document.getElementById('daSkor').innerHTML = score
  if (score === 2137) {
    handleAudio()
  }
}, false);

setInterval(() => {
  let date = new Date()
  
  if (date.getHours() === 21 && date.getMinutes() === 37) {
    handleAudio()
  }
}, 10000)
