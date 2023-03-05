import React from 'react'
import './Card.css';

const Card = () => {
  return (
    <div className='cards-container'>

      <div className='card-front__container'>
        <p className='card-front__number'> 0000 0000 0000 0000 </p>
        <div>
          <p className='card-front__name'> Jane Apelbed </p>
          <p className='card-front__date'> 00/00 </p>
        </div>
      </div>
      <div className='card-back__container'>
        <p className='card-back__cvc'> 000 </p>
      </div>
    </div>
  )
}

export default Card