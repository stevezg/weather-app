const KEY = 'da87b0662917fd134138abb32de958e6'

export const getWeather = (lat, lng) =>
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast/hourly?APPID=${KEY}&lat=${lat}&lon=${lng}`
  ).then(resp => resp.json())
