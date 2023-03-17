import React from 'react';
import './Succes.css';
import logo from '../../../public/icon-complete.svg';

const Succes = () => {
  return (
    <div className='succes'>
        <img className='succes__icon' src={logo} />
        <div className='succes__info'>
            <h2>THANK YOU!</h2>
            <p> We've added your credit card details.</p>
        </div>
        
        <button className='succes__btn'>Continue</button>
        
    </div>
  )
}

export default Succes