import React from 'react'
import './Card.css'

const Card = ({
  name,
  country,
  temp_c,
  humidity,
  vis_km,
  condition,
  localtime,
  feelslike_c,
}) => {
  return (
    <>
      <header className='card__header'>
        <p>
          {country}, {name}
        </p>
        <h2 className='card__temp'>{temp_c} °C</h2>
        <p className='card__condition'>{condition?.text}</p>
      </header>
      <article className='card'>
        <section className='card__section'>
          <article>
            <p>Feelslike {feelslike_c} °C</p>
            <p>Humidity {humidity}%</p>
          </article>
          <div className='card__divider' />
          <article>
            <p>Localtime</p>
            <h2>{localtime?.split(' ')[1]}</h2>
          </article>
        </section>

        <section className='card__section'>
          <p>{vis_km}km/h</p>
        </section>
      </article>
    </>
  )
}

export default Card
