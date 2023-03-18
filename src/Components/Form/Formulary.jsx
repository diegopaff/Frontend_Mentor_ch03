import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import Card from '../Card/Card.jsx';
import Succes from '../succes/Succes.jsx';
import './Formulary.css'

// Masking input values
const normalizeCardNumber = (val) => { return val.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ").substr(0, 19) || "" }
const upperCaseName = (name) => { return name.toUpperCase() }

const Formulary = () => {

  const[formSend,setFormSend] = useState(false);

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
    setFormSend(data => !data)
  }

  const name = upperCaseName(watch('name'));
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
      
      <form onSubmit={handleSubmit(onSubmit)}>
        {formSend && <Succes/>}
        {!formSend && 
        
          <div className='form'>
            <label htmlFor="name" className='form_label'>CARDHOLDER NAME</label>
            <input className='form_input' id='name'
              {...register("name", { 
                  required: true, 
                  maxLength: 20,
                  pattern: '[A-Za-z]+' })}/>
            {errors?.name?.type === "required" && (<p className='form-error'>Can't be blank.</p>)}
            {errors?.name?.type === "maxLength" && (<p className='form-error'>Can't have more than 20 characters.</p>)}
            {errors?.name?.type === "pattern" && (<p className='form-error'>Wrong format, only letters.</p>)}

            <label htmlFor="numberCard" className='form_label'>CARD NUMBER</label>
            <input 
              type='number'
              id='numberCard' 
              name='number' 
              className='form_input'
              {...register("number", { 
                    required: true, 
                    minLength: 16,
                    maxLength: 16,
                    pattern: "[0-9]+",})}/>
            {errors?.number?.type === "required" && (<p className='form-error'>Can't be blank.</p>)}
            {errors?.number?.type === "minLength" && (<p className='form-error'>Must complete the 16 digits.</p>)}
            {errors?.number?.type === "maxLength" && (<p className='form-error'>Must complete only 16 digits.</p>)}
            {errors?.number?.type === "inputMode" && (<p className='form-error'>Wrong format, only numbers.</p>)}

            <div className='date_cvc'>
              <div className='form-date'>
                <label htmlFor="numberMonth" className='form_label'>{'EXP. DATE  (MM/YY)'}</label>
                <div>
                  <div className='flex-col'>
                    <input  id='numberMonth' name='number' type='number' className='form_cvc_input' placeholder='MM' 
                      {...register("month", { 
                        required: true, 
                        minLength: 2,
                        maxLength: 2,
                        pattern: "[0-9]+",})}/>
                    {errors?.month?.type === "required" && (<p className='form-error'>Can't be blank.</p>)}
                    {errors?.month?.type === "minLength" && (<p className='form-error'>Only 2 digits</p>)}
                    {errors?.month?.type === "maxLength" && (<p className='form-error'>Only 2 digits</p>)}
                    {errors?.month?.type === "inputMode" && (<p className='form-error'>Wrong format, only numbers.</p>)}
                  </div>
                  <div className='flex-col'>        
                    <input  id='numberYear' name='number' type='number' className='form_cvc_input' placeholder='YY'
                      {...register("year", { 
                        required: true, 
                        minLength: 2,
                        maxLength: 2,
                        pattern: "[0-9]+"})}/>
                    {errors?.year?.type === "required" && (<p className='form-error'>Can't be blank.</p>)}
                    {errors?.year?.type === "minLength" && (<p className='form-error'>Only 2 digits</p>)}
                    {errors?.year?.type === "maxLength" && (<p className='form-error'>Only 2 digits</p>)}
                    {errors?.year?.type === "inputMode" && (<p className='form-error'>Wrong format, only numbers.</p>)}
                  </div>      
                </div>
              </div>
              <div className='form-cvc'>
                <label htmlFor="cvc" className='form_label'>CVC</label>
                
                  <input id='cvc' name='cvc' className='form_input' type='number' maxlength="3"
                  {...register("cvc", { 
                    required: true, 
                    minLength: 3,
                    maxLength: 3,
                    pattern: "[0-9]+"})}/>
                  {errors?.cvc?.type === "required" && (<p className='form-error'>Can't be blank.</p>)}
                  {errors?.cvc?.type === "minLength" && (<p className='form-error'>Must have 3 digits</p>)}
                  {errors?.cvc?.type === "maxLength" && (<p className='form-error'>Must have 3 digits</p>)}
                  {errors?.cvc?.type === "inputMode" && (<p className='form-error'>Wrong format, only numbers.</p>)}

                
              </div>
            </div>
              <input type='submit' value='Confirm' className='submit_btn' />
          </div>
      }
      </form>
        
    </div>
  )
}

export default Formulary