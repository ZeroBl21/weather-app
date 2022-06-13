import { useEffect, useState } from 'react'
import getWeather from '../services/getWeather'

export const useWeather = ({ keyword } = { keyword: null }) => {
  const [time, setTime] = useState({})
  const [loading, setLoading] = useState(false)

  const city = keyword || localStorage.getItem('lastKeyword') || 'Santiago'
  console.log(city, localStorage.getItem('lastKeyword'), keyword)

  useEffect(() => {
    setLoading(true)

    getWeather({ city }).then((res) => {
      setTime(res)
      setLoading(false)
      localStorage.setItem('lastKeyword', city)
    })
  }, [keyword, city, setTime])

  return { loading, time }
}
