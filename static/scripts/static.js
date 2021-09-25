let daRRInterval
let flip = false
let playing = false

let rr = `
<br>
<br>
<br>
<img id="rrjpg" src="/static/ra.jpg" width="660" height="371">
<audio id="rr">
  <source src="/static/rr.mp3" type="audio/mpeg">
  Twoja przeglądarka nie wspiera audio :(
</audio>
`

let handleRRAudio = () => {
  document.getElementById('content').innerHTML = rr
  let audio = document.getElementById('rr')
    
  if (!audio.paused) {
    if (audio.currentTime > 37) {
      audio.currentTime = 0
    }
  } else {
    audio.currentTime = 0
    audio.play()
    handleRRImage()
  }
}

let handleRRImage = () => {
  let rrjpg = document.getElementById('rrjpg')
  let site = document.getElementById('site')
  rrjpg.parentElement.style.display = ``
  site.style.display = `none`

  clearInterval(daRRInterval)

  daRRInterval = setInterval(() => {
    if (Math.random() < 0.2137) {
      flip = !flip
    }

    transformImage('rrjpg', `scaleX(${flip ? -1 : 1})`)
    if (document.getElementById('rr').paused) {
      clearInterval(daRRInterval)
      rrjpg.parentElement.style.display = `none`
      document.getElementById('content').innerHTML = ''
    }
  }, 50)
}

let transformImage = (id, transform) => {
  document.getElementById(id).style.transform = transform
}

document.getElementById('baton').addEventListener('click', () => {
  if (!playing) {
    handleRRAudio()
  }
}, false)
