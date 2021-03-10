let score = 0
let daInterval
let rotation = 0

let handleAudio = () => {
  let audio = document.getElementById('blogoslawieni')
    
  if (!audio.paused) {
    if (audio.currentTime > 37) {
      audio.currentTime = 0
    }
  } else {
    audio.currentTime = 0
    audio.play()
    handleImage()
  }
}

let handleImage = () => {
  let jp2 = document.getElementById('jp2')
  let site = document.getElementById('site')
  jp2.style.display = ``
  site.style.display = `none`

  clearInterval(daInterval)

  daInterval = setInterval(() => {
    rotation++
    rotation %= 360
    rotateImage(rotation)
    if (document.getElementById('blogoslawieni').paused) {
      clearInterval(daInterval)
      jp2.style.display = `none`
      site.style.display = ``
    }
  }, 10)
}

let rotateImage = (degrees) => {
  document.getElementById('jp2').style.transform = `rotate(${degrees}deg)`
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
