let score = 0
document.getElementById('baton').addEventListener('click', () => {
  score++
  document.getElementById('daSkor').innerHTML = score
  if (score === 2137) {
    document.getElementById('blogoslawieni').play()
  }
}, false);
