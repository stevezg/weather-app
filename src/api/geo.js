export const geocode = (query) => {
  const geocode_db = {
    'moscow': {lat: 55.751, lng: 37.618},
    'san francisco': {lat: 37.733795, lng: -122.446747},
    'los angeles': {lat: 34.052235, lng: -118.243683},
    'new york': {lat: 40.730610, lng: -73.935242},
    'dallas': {lat: 2.897480, lng: -97.040443},
    'denver': {lat: 39.742043, lng: -104.991531},
    'miami': {lat: 25.761681, lng: -80.191788},
    'seattle': {lat: 47.608013, lng: -122.335167},
    'chicago': {lat: 41.881832, lng: -87.623177},
  }
  let place = geocode_db[query.toLowerCase()] || null
  return new Promise((res, rej) => setTimeout(res, 500))
    .then(() => place)
}