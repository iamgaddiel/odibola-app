import { IonButton, IonCard, IonCardContent, IonContent, IonIcon, IonImg, IonItem, IonList, IonPage } from '@ionic/react'
import React from 'react'
import Header from '../components/Header'


import Land1 from '../assets/images/land.png'
import { alertCircleOutline, carOutline, radioButtonOff, radioButtonOffOutline } from 'ionicons/icons'
import LandPreview from '../components/LandPreview'


const LandVisitDecision = () => {
  return (
    <IonPage>

      <Header routerLink='/' />
      <IonContent className='ion-padding'>
        <LandPreview
          title='Condominium and Lake'
          location='19, St. Adeola Odeku, Lekki, Lagos.'
          price='N30,000,000 per SQM'
          imageUrl={Land1}
        />

        <section className="warning-notice-border ion-padding warning-bg mt-4 mx-3">
          <IonIcon icon={alertCircleOutline} color="warning" />
          <span className="mx-2 bold">Take Note</span>
          <p className="text-muted mt-3">
            Scheduling visits to our lands are only open to those who have the intent to buy.
          </p>
        </section>

        <section className="options">
          <IonCard>
            <IonCardContent className='flx-center-y light-bg'>
              <IonIcon icon={radioButtonOffOutline} size='large' />
              <h3 className="text-muted bold mx-2">Yes, I’m a serious buyer</h3>
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardContent className='flx-center-y light-bg'>
              <IonIcon icon={radioButtonOffOutline} size='large' />
              <h3 className="text-muted bold mx-2">I just want to make enquries</h3>
            </IonCardContent>
          </IonCard>

          <section className="ion-padding">
            <IonButton
              fill='clear'
              className='blue-bg mt-4'
              color='light'
              expand='block'
              routerDirection='forward'
              routerLink='/land-detail'
            // todo: goto router link when form is submited
            >
              Continue
            </IonButton>
          </section>

        </section>
      </IonContent>
    </IonPage>
  )
}

export default LandVisitDecision