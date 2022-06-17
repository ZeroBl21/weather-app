import React, { useState } from 'react'
import { useWeather } from '../../hooks/useWeather'
import Card from '../Card'
import Loader from '../Loader'
import './Weather.css'

const Weather = () => {
  const [input, setInput] = useState('')
  const [keyword, setKeyword] = useState(null)

  const { time, loading } = useWeather({ keyword })

  const handleInput = (e) => setInput(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (input === '') return
    setKeyword(input)
  }

  return (
    <div className={`weather ${time?.is_day === 0 ? 'night' : ''}`}>

      {loading || time === undefined ? (
        <Loader />
      ) : (
        <>
          <Card {...time} />
        </>
      )}
      <form onSubmit={handleSubmit}>
        <input type='text' value={input} onChange={handleInput} />
      </form>
    </div>
  )
}

export default Weather
