self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v2').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/favicon.ico',
        '/static/',
        '/static/index.html',
        '/static/jp2-2.jpg',
        '/static/jp2-2.mp3',
        '/static/jp2.jpg',
        '/static/jp2.png',
        '/static/jp2.mp3',
        '/static/logo.png',
        '/static/logo144.png',
        '/static/logo192.png',
        '/static/ra.jpg',
        '/static/rr.mp3',
        '/static/scripts/main.js',
        '/static/scripts/static.js',
        '/static/manifest.json'
      ])
    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => {
    if (response !== undefined) {
      return response
    } else {
      return fetch(event.request).then(response => {
        let responseClone = response.clone()
        
        caches.open('v2').then(cache => {
          cache.put(event.request, responseClone)
        })
        return response
      }).catch(() => {
        return caches.match('/static/ra.jpg')
      })
    }
  }))
})

self.addEventListener('activate', event => {
  var cacheKeeplist = ['v2']

  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (cacheKeeplist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }))
    })
  )
})