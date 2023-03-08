import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import Card from '../Card/Card.jsx';
import './Formulary.css'


const normalizeCardNumber = (val) => {
  return val.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ").substr(0, 19) || ""
}

const Formulary = () => {

  
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues:{
      name: 'JANE APPLESEED',
      number: '0000000000000000',
      month: '00',
      year:'00',
      cvc: '000'
    }
  });
  
  const onSubmit = (data) => {
    console.log(data)
  }

  const name = watch('name');
  const cardNumber = normalizeCardNumber(watch('number'));
  const expMonth = watch('month');
  const expYear = watch('year');
  const cvc = watch('cvc');


  return (
    <div className='form-container'>
      <Card 
        nombre={name} 
        number={cardNumber} 
        month={expMonth} 
        year={expYear}
        cvc={cvc}
      />

      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" className='form_label'>CARDHOLDER NAME</label>
        <input className='form_input' 
          {...register("name", { 
              required: true, 
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i})}/>
          {errors?.name?.type === "required" && <p>This field is required</p>}
          {errors?.name?.type === "maxLength" && (<p>First name cannot exceed 20 characters</p>)}
          {errors?.name?.type === "pattern" && (<p>Alphabetical characters only</p>)}

        <label htmlFor="number" className='form_label'>CARD NUMBER</label>
        <input 
          type='number'
          id='number' 
          name='number' 
          className='form_input'
          onChange={(ev)=>{
            console.log(ev);
            const { value } = ev.target;
            ev.target.value = normalizeCardNumber(value);
            }}
            {...register("number", { 
                required: true, 
                maxLength: 30, 
                autoComplete: 'cc-number',
                inputMode: 'numeric', 
                type: 'tel' })}/>

            <div className='date_cvc'>
              <div className='form-date'>
                <label htmlFor="MM" className='form_label'>{'EXP. DATE  (MM/YY)'}</label>
                <div>
                  <input  id='number' name='number' className='form_cvc_input' placeholder='MM'
                  {...register("month")}/>

                  <input  id='number' name='number' className='form_cvc_input' placeholder='YY'
                  {...register("year")}/>
                </div>
              </div>
              <div className='form-cvc'>
                <label htmlFor="cvc" className='form_label'>CVC</label>
                <input id='cvc' name='cvc' className='form_input'
                {...register("cvc")}/>
              </div>
            </div>
            <input type='submit' value='Confirm' className='submit_btn' />
        </form>
        
    </div>
  )
}

export default Formulary