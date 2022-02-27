import { IonButton, IonCard, IonCardContent, IonContent, IonIcon, IonInput, IonLabel, IonPage, IonTextarea } from '@ionic/react'
import { alertCircleOutline, radioButtonOffOutline, star } from 'ionicons/icons'
import React from 'react'

// image
import Land1 from '../assets/images/land.png'
import Header from '../components/Header'
import LandPreview from '../components/LandPreview'

// component
const LandEnquiryForm = () => {
  return (
    <IonPage>

      <Header routerLink='/land-schedule-verification' />

      <IonContent className='ion-padding'>
        <LandPreview
          title='Condominium and Lake'
          location='19, St. Adeola Odeku, Lekki, Lagos.'
          price='N30,000,000 per SQM'
          imageUrl={Land1}
        />

        <section className="ion-padding mt-4 border border-radius-lg ">
          <h2 className="">Drop us a line or two</h2>
          <form action="" className='mt-2 text-muted'>

            <div className="form-group my-3">
              <IonLabel slot='start'>
                Name
                <IonIcon icon={star} color='danger' />
              </IonLabel>
              <div className="input-wrapper light-bg mt-2">
                <IonInput placeholder='Full name' name='' />
              </div>
            </div>

            <div className="form-group my-3">
              <IonLabel slot='start'>
                Email
                <IonIcon icon={star} color='danger' className='text-sm' />
              </IonLabel>
              <div className="input-wrapper light-bg mt-2">
                <IonInput placeholder='Email address' type='email' name='' />
              </div>
            </div>


            <div className="form-group my-3">
              <IonLabel slot='start'>
                Question or Comments
                <IonIcon icon={star} color='danger' />
              </IonLabel>
              <div className="input-wrapper light-bg mt-2">
                <IonTextarea name='' rows={7} placeholder="Your message" />
              </div>
            </div>

            <div className="my-2 d-flex justify-content-end">
              <IonButton fill='clear' expand='block' className='blue-bg w-50' color='light'>Send</IonButton>
            </div>
          </form>
        </section>
      </IonContent>
    </IonPage>
  )
}

export default LandEnquiryForm