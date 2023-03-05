import React from 'react'
import './Formulary.css'

const Formulary = () => {
  return (
    <div className='form-container'>
        <form className='form'>
            <label htmlFor="name" className='form_label'>CARDHOLDER NAME</label>
            <input type='text' id='name' name='name' className='form_input'/>
            <label htmlFor="number" className='form_label'>CARD NUMBER</label>
            <input type='text' id='number' name='number' className='form_input' placeholder='e.6 9456 5684 6584 6545'/>
            <div className='date_cvc'>
              <div className='form-date'>
                <label htmlFor="MM" className='form_label'>{'EXP. DATE  (MM/YY)'}</label>
                <div>
                  <input type='text' id='number' name='number' className='form_cvc_input' placeholder='MM'/>
                  <input type='text' id='number' name='number' className='form_cvc_input' placeholder='YY'/>
                </div>
              </div>
              <div className='form-cvc'>
                <label htmlFor="cvc" className='form_label'>CARDHOLDER NAME</label>
                <input type='text' id='cvc' name='cvc' className='form_input'/>
              </div>
            </div>
            <input type='submit' value='Confirm' className='submit_btn' />
        </form>
        
    </div>
  )
}

export default Formulary