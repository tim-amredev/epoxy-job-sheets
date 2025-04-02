// Service Worker for Epoxy Job Sheets
const CACHE_NAME = "epoxy-job-sheets-v1"
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/assets/css/main.css",
  "/assets/js/main.js",
  "/assets/images/logo.svg",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
  "/404.html",
]

// Import localforage (assuming it's available via CDN or similar)
importScripts("https://unpkg.com/localforage/dist/localforage.js")

// Install event - cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE)
      })
      .then(() => self.skipWaiting()),
  )
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName !== CACHE_NAME
            })
            .map((cacheName) => {
              return caches.delete(cacheName)
            }),
        )
      })
      .then(() => self.clients.claim()),
  )
})

// Fetch event - serve from cache if available, otherwise fetch from network
self.addEventListener("fetch", (event) => {
  // Skip cross-origin requests and form submissions
  if (event.request.method !== "GET" || event.request.url.indexOf("formsubmit.co") !== -1) {
    return
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached response if found
      if (response) {
        return response
      }

      // Clone the request - request can only be used once
      const fetchRequest = event.request.clone()

      return fetch(fetchRequest)
        .then((response) => {
          // If response is invalid, return it
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response
          }

          // Clone the response - response can only be used once
          const responseToCache = response.clone()

          // Add response to cache for future use
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache)
          })

          return response
        })
        .catch(() => {
          // If fetch fails (offline), try to return a fallback
          if (event.request.url.indexOf(".html") > -1) {
            return caches.match("/404.html")
          }
          return null
        })
    }),
  )
})

// Handle form submissions when offline
self.addEventListener("sync", (event) => {
  if (event.tag === "form-sync") {
    event.waitUntil(syncForms())
  }
})

// Function to sync stored form data when back online
function syncForms() {
  return localforage.getItem("offlineForms").then((forms) => {
    if (!forms || !forms.length) return

    return Promise.all(
      forms.map((form) => {
        return fetch(form.url, {
          method: "POST",
          body: form.data,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }).then((response) => {
          if (response.ok) {
            // Remove synced form from storage
            return localforage.getItem("offlineForms").then((storedForms) => {
              const updatedForms = storedForms.filter((storedForm) => storedForm.id !== form.id)
              return localforage.setItem("offlineForms", updatedForms)
            })
          }
        })
      }),
    )
  })
}

