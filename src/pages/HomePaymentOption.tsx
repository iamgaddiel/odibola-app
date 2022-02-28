import { IonCard, IonContent, IonIcon, IonImg, IonPage } from '@ionic/react'
import { chevronForwardOutline, lockClosedOutline} from 'ionicons/icons'
import React from 'react'
import Header from '../components/Header'
import PropertyPreview from '../components/PropertyPreview'


// image
import Home1 from '../assets/images/home.png'
import Card from '../assets/svgs/card.svg'
import BankDraft from '../assets/svgs/bank draft icon.svg'
import Bank from '../assets/svgs/bank transfer.svg'

// css
import '../assets/css/verification.css';

const HomePaymentOption = () => {
  return (
    <IonPage>
      <Header routerLink='/property-detail' />


      <IonContent className='ion-padding'>
        <h1 className='text-muted text-center bold'>Payment</h1>
        <PropertyPreview
          description='3 Bed Room Detached'
          price='N30,000,000 per SQM'
          imageURL={Home1}
        />


        <section className='mt-5 ion-padding'>
          <span className="text-muted">Select Payment Plan</span>
          <div className="primary-notice-bg ion-padding rounded flx-center-y mt-2">
            <IonIcon icon={lockClosedOutline} color="primary" size='large' />
            <div className='mx-2'>
              <h6 className="bold">Pay Deposit to Secure Property</h6>
              <p className="text-muted ">
                Secure property by paying  25% deposit.
              </p>
            </div>
          </div>
        </section>


        <div className="form-card">
          {/*  card */}
          <IonCard
            routerDirection='forward'
            routerLink=''
            className='ion-padding d-flex align-items-center justify-content-between ml-0'>
            <div className='d-flex align-items-center'>
              <div className="img-container">
                <IonImg src={Card} className="ion-margin-right" />
              </div>
              <h4 className="text-muted mx-3">Pay with Card</h4>
            </div>
            <IonIcon icon={chevronForwardOutline} className="blue-text" />
          </IonCard>
    
          {/* bank */}
          <IonCard
            routerDirection='forward'
            routerLink='/home-bank-transfer'
            className='ion-padding d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
              <div className="img-container">
                <IonImg src={Bank}  />
              </div>
              <h4 className="text-muted">Pay with Bank</h4>
            </div>
            <IonIcon icon={chevronForwardOutline} className="blue-text" />
          </IonCard>


          {/* bank draft */}
          <IonCard
            routerDirection='forward'
            routerLink=''
            className='ion-padding d-flex align-items-center justify-content-between ml-0'>
            <div className='d-flex align-items-center'>
              <div className="img-container">
                <IonImg src={BankDraft} className="ion-margin-right" />
              </div>
              <h4 className="text-muted mx-3">Pay with Bank Draft</h4>
            </div>
            <IonIcon icon={chevronForwardOutline} className="blue-text" />
          </IonCard>
        </div>

      </IonContent>
    </IonPage >
  )
}

export default HomePaymentOption