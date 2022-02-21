import { IonButton, IonInput, IonItem, IonLabel, IonList, IonRouterLink, IonSelect, IonSelectOption } from '@ionic/react'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import { useForm } from 'react-hook-form'

import '../assets/css/reg.css';
import 'react-phone-number-input/style.css'


const OrganizationReg: React.FC = () => {

  // set value for phone number input
  let [phoneNumber, setPhoneNumber] = useState<string>("")

  // business type
  let [bizType, setBizType] = useState<string>("")

  const handleSetPhoneNumber = (phoneNumber: any) => setPhoneNumber(phoneNumber);

  // react-hock-form
  //todo: create interface for the form
  const { register, handleSubmit } = useForm()

  // todo: send form data to firebase 
  const handleFormSubmit = (data: any) => console.log(data)

  return (
    <>
      <p className="gray-text">Individual Registration</p>

      <form className='reg-form' onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form-group">

          {/* Business name */}
          <div className="input-wrapper">
            <IonInput
              type="text"
              className='border-right'
              placeholder='Organization Name'
              {...register('organization_name', {
                required: 'Organization name is required'
              })}
            />
          </div>

          {/* Business type */}
          <div className="input-wrapper mt-3">
            <IonSelect
              placeholder='Business Type'
              value={bizType}
              onIonChange={e => setBizType(e.detail.value)}
            >
              <IonSelectOption value="a">A</IonSelectOption>
              <IonSelectOption value="b">B</IonSelectOption>
              <IonSelectOption value="c">C</IonSelectOption>
            </IonSelect>
          </div>
 
          {/* Website */}
          <div className="input-wrapper mt-3">
            <IonInput
              type='url'
              placeholder='Website' 
              {...register('url', { required: true })}
            />
          </div>

          {/* Email */}
          <div className="input-wrapper mt-3">
            <IonInput
              type='email'
              placeholder='Email'
              {...register('email', {
                required: 'Email is required'
              })} />
          </div>

          {/* Phone number */}
          <div className="input-wrapper mt-3">
            <IonLabel className='text-muted'>Phone number</IonLabel>
            <PhoneInput
              onChange={handleSetPhoneNumber}
              value={phoneNumber}
            />
          </div>

          {/* Password */}
          <div className="input-wrapper mt-3">
            <IonInput
              type='password'
              placeholder='Password'
              {...register('password', {
                required: 'Password is missing',
                maxLength: {
                  value: 6,
                  message: 'Enter a password not less than 6'
                },
                minLength: {
                  value: 20,
                  message: 'Enter a password not more than 12'
                }
              })}
            />
          </div>

          {/* password rules */}
          <section className="password-rules mt-4">
            <ul>
              <li className="text-muted">
                <small>
                  Enter a password within 6-20 characters
                </small>
              </li>
              <li className="text-muted">
                <small>
                  Enter at least two of the following: letter(a-z), numbers(0-9), symbols
                </small>
              </li>
            </ul>
          </section>

          <IonButton
            type='submit'
            fill='clear'
            expand='block'
            shape='round'
            size='default'
            className='blue-bg text-light mt-3 ion-margin-top'>
            Continue
          </IonButton>
        </div>
      </form>
    </>
  )
}

export default OrganizationReg