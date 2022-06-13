import React from 'react'
import './Card.css'

const Card = ({ name, country, temp_c, humidity, vis_km, condition }) => {
  return (
    <article className='card'>
      <section className='card__section'>
        <article>
          <h2>{temp_c} °C</h2>
          <p>{condition?.text}</p>
        </article>
        <div className='card__divider' />
        <article>
          <h2>{country}</h2>
          <p>{name}</p>
        </article>
      </section>

      <section className='card__section'>
        <p>Humidity {humidity}%</p>
        <p>{vis_km}km/h</p>
      </section>
    </article>
  )
}

export default Card
