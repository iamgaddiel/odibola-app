import { IonPage, IonContent, IonIcon, IonCard, IonList, IonItem, IonButton } from '@ionic/react'
import { lockClosedOutline, chevronForwardOutline, copyOutline } from 'ionicons/icons'
import React from 'react'
import Header from '../components/Header'

const PayWithBackTransfer: React.FC = () => {
    return (
        <IonPage>
            <Header routerLink='/home-payment-option' />


            <IonContent className='ion-padding'>
                <h1 className='text-muted text-center bold'>Payment</h1>

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


                <IonCard className='light-bg rounded-edges'>
                    <IonList className='light-bg '>
                        <IonItem>
                            <div className='py-3'>
                                <small className='text-muted'>Total cost</small>
                                <h3 className='m-0'>N98,000,000.00</h3>
                            </div>
                        </IonItem>
                        <IonItem>
                            <div className='py-3'>
                                <small className='text-muted'>Total cost</small>
                                <h3 className='bold'>N98,000,000.00</h3>
                                <small className='text-muted'>25% of N98,000,000.00</small>
                            </div>
                        </IonItem>
                        <IonItem>
                            <div className='py-3 d-flex justify-content-between align-items-center w-100'>
                                <div>
                                    <small className='text-muted'>Account number</small>
                                    <h3 className='m-0'>01234567891</h3>
                                </div>
                                <IonButton fill='clear'>
                                    <IonIcon icon={copyOutline} className='text-muted' size='large' />
                                </IonButton>
                            </div>
                        </IonItem>
                        <IonItem>
                            <div className='py-3'>
                                <small className='text-muted'>Swift Code</small>
                                <h1 className='m-0'>N98,000,000.00</h1>
                            </div>
                        </IonItem>
                    </IonList>
                </IonCard>


                <section className="text-muted ion-padding">
                    <h5>Please submit a physical copy of this bank draft to this address:</h5>
                    <p className="blue-text">
                        Orange Island Projects Office, 22, Dr. Omon Ebhomenye Street, Off Awudu Ekpegha Street, Lekki Phase 1, Lagos, Nigeria.
                    </p>
                </section>

                <IonButton
                    fill='clear'
                    expand='block'
                    color='light'
                    className='blue-bg my-2'
                    routerDirection='forward'
                    routerLink='/home-proof-of-payment'
                >
                    Click to upload proof of payment
                </IonButton>
            </IonContent>
        </IonPage >
    )
}

export default PayWithBackTransfer