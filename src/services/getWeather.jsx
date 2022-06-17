import { BASE_URL, API_KEY } from './settings'

const extractData = (apiResponse) => {
  if (!apiResponse?.error) {
    const { name, country, localtime } = apiResponse.location
    const { temp_c, humidity, vis_km, is_day, condition, feelslike_c } = apiResponse.current

    return { name, country, temp_c, humidity, vis_km, is_day, condition, localtime, feelslike_c }
  }
}

const getWeather = ({ city }) => {
  const API = `${BASE_URL}current.json?key=${API_KEY}q=${city}&aqi=no`

  return window
    .fetch(API)
    .then((res) => res.json())
    .then(extractData)
}

export default getWeather
