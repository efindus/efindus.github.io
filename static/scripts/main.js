if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/static/scripts/sw.js', { scope: '/' }).then(reg => {

    if(reg.installing) {
      console.log('Service worker installing')
    } else if(reg.waiting) {
      console.log('Service worker installed')
    } else if(reg.active) {
      console.log('Service worker active')
    }

  }).catch(error => {
    console.log('Registration failed with ' + error)
  })
}

let score = 0
let daPapiezInterval
let daRRInterval
let rotation = 0
let flip = false
let playing2137 = false

let papiez = `
<br>
<br>
<br>
<img id="jp2" src="/static/jp2.jpg" width="480" height="494" alt="jp2">
<audio id="barka">
  <source src="/static/jp2.mp3" type="audio/mpeg">
  Twoja przeglądarka nie wspiera audio :(
</audio>
`

let blogoslawieni = `
<br>
<br>
<br>
<img id="jp2-2" src="/static/jp2-2.jpg" width="456" height="548" alt="jp2">
<audio id="blogoslawieni">
  <source src="/static/jp2-2.mp3" type="audio/mpeg">
  Twoja przeglądarka nie wspiera audio :(
</audio>
`

let rr = `
<br>
<br>
<br>
<img id="rrjpg" src="/static/ra.jpg" width="660" height="371" alt="You got Rick Rolled!">
<audio id="rr">
  <source src="/static/rr.mp3" type="audio/mpeg">
  Twoja przeglądarka nie wspiera audio :(
</audio>
`

let daSiteInner = (daScore) => {
  return `
  <h1 class="efindus" style="color: white;">
    Nafing tu si hir...
  </h1>
  <img src="/static/jp2.png" width="400" height="240" alt="jp2">
  <p>
    <button id="baton" type="button">No klikaj no! Już!</button>
    <h1 class="efindus" style="color: white;">
      Żeś kliknął guzior 
      <span id="daSkor">${daScore}</span>
      razy!
    </h1>
  </p>
  `
}

let handlePapiezAudio = () => {
  document.getElementById('content').innerHTML = papiez
  let audio = document.getElementById('barka')
    
  if (!audio.paused) {
    if (audio.currentTime > 37) {
      audio.currentTime = 0
    }
  } else {
    audio.currentTime = 0
    audio.play()
    handlePapiezImage()
  }
}

let handlePapiezImage = () => {
  let jp2 = document.getElementById('jp2')
  let site = document.getElementById('site')
  let addedEvent = false
  jp2.parentElement.style.display = ``
  site.style.display = `none`
  site.innerHTML = ''

  clearInterval(daPapiezInterval)

  daPapiezInterval = setInterval(() => {
    if (document.getElementById('barka').currentTime > 37 && !addedEvent) {
      addedEvent = true
      jp2.style.cursor = 'pointer'
      jp2.addEventListener('click', () => {
        document.getElementById('barka').pause()
      }, false)
    }

    if (rotation % 2 !== 0) {
      rotation++
    }

    if (rotation % 20 === 0) {
      if (Math.random() < 0.2137) {
        flip = !flip
      }
    }
    
    rotation += 2

    rotation %= 360
    transformImage('jp2', `scaleX(${flip ? -1 : 1}) rotate(${flip ? 360 - rotation : rotation}deg)`)
    if (document.getElementById('barka').paused) {
      clearInterval(daPapiezInterval)
      jp2.parentElement.style.display = `none`
      site.style.display = ``
      playing2137 = false
      document.getElementById('content').innerHTML = ''
      site.innerHTML = daSiteInner(score)
      document.getElementById('baton').addEventListener('click', () => {
        batonHandler()
      }, false)
    }
  }, 20)
}

let handlePapiezAudio2 = () => {
  document.getElementById('content').innerHTML = blogoslawieni
  let audio = document.getElementById('blogoslawieni')
    
  if (!audio.paused) {
    if (audio.currentTime > 37) {
      audio.currentTime = 0
    }
  } else {
    audio.currentTime = 0
    audio.play()
    handlePapiezImage2()
  }
}

let handlePapiezImage2 = () => {
  let jp2 = document.getElementById('jp2-2')
  let site = document.getElementById('site')
  let addedEvent = false
  jp2.parentElement.style.display = ``
  site.style.display = `none`
  site.innerHTML = ''

  clearInterval(daPapiezInterval)

  daPapiezInterval = setInterval(() => {
    if (document.getElementById('blogoslawieni').currentTime > 37 && !addedEvent) {
      addedEvent = true
      jp2.style.cursor = 'pointer'
      jp2.addEventListener('click', () => {
        document.getElementById('blogoslawieni').pause()
      }, false)
    }

    if (rotation % 2 !== 0) {
      rotation++
    }

    if (rotation % 20 === 0) {
      if (Math.random() < 0.2137) {
        flip = !flip
      }
    }
    
    rotation += 2

    rotation %= 360
    transformImage('jp2-2', `scaleX(${flip ? -1 : 1}) rotate(${flip ? 360 - rotation : rotation}deg)`)
    if (document.getElementById('blogoslawieni').paused) {
      clearInterval(daPapiezInterval)
      jp2.parentElement.style.display = `none`
      site.style.display = ``
      playing2137 = false
      document.getElementById('content').innerHTML = ''
      site.innerHTML = daSiteInner(score)
      document.getElementById('baton').addEventListener('click', () => {
        batonHandler()
      }, false)
    }
  }, 20)
}

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
  let addedEvent = false
  rrjpg.parentElement.style.display = ``
  site.style.display = `none`
  site.innerHTML = ''

  clearInterval(daRRInterval)

  daRRInterval = setInterval(() => {
    if (document.getElementById('rr').currentTime > 37 && !addedEvent) {
      addedEvent = true
      rrjpg.style.cursor = 'pointer'
      rrjpg.addEventListener('click', () => {
        document.getElementById('rr').pause()
      }, false)
    }

    if (Math.random() < 0.2137) {
      flip = !flip
    }

    transformImage('rrjpg', `scaleX(${flip ? -1 : 1})`)
    if (document.getElementById('rr').paused) {
      clearInterval(daRRInterval)
      rrjpg.parentElement.style.display = `none`
      site.style.display = ``
      document.getElementById('content').innerHTML = ''
      site.innerHTML = daSiteInner(score)
      document.getElementById('baton').addEventListener('click', () => {
        batonHandler()
      }, false)
    }
  }, 100)
}

let transformImage = (id, transform) => {
  document.getElementById(id).style.transform = transform
}

let batonHandler = () => {
  score++
  document.getElementById('daSkor').innerHTML = score
  if (score === 666) {
    handleRRAudio()
  }
  if (score === 2137) {
    handlePapiezAudio()
  }
  if(score === 21337) {
    handlePapiezAudio2()
  }
}

document.getElementById('site').innerHTML = daSiteInner(score)

document.getElementById('baton').addEventListener('click', () => {
  batonHandler()
}, false)

if (!playing2137) {
  let date = new Date()

  if (date.getHours() === 21 && date.getMinutes() === 37) {
    playing2137 = true
    clearInterval(daRRInterval)
    handlePapiezAudio()
  }
}

setInterval(() => {
  if (!playing2137) {
    let date = new Date()
  
    if (date.getHours() === 21 && date.getMinutes() === 37) {
      playing2137 = true
      clearInterval(daRRInterval)
      handlePapiezAudio()
    }
  }
}, 10000)
