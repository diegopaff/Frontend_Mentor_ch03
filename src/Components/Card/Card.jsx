import React from 'react'
import './Card.css';
import CardLogo from '../../../public/card-logo.png';

const Card = ({ nombre, number, month, year, cvc }) => {

  return (
    <div className='cards-container'>

      <div className='card-front__container'>
        <img className='card-front__logo' alt='Company Logo'src={CardLogo}></img>
        <p className='card-front__number'> {number} </p>
        <div className='card-front__details'>
          <p className='card-front__name'> {nombre} </p>
          <p className='card-front__date'>{month}/{year} </p>
        </div>
      </div>
      <div className='card-back__container'>
        <p className='card-back__cvc'> {cvc} </p>
      </div>
    </div>
  )
}

export default Card