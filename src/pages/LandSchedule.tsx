import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonIcon, IonText, IonTextarea, IonButton } from '@ionic/react'
import { calendarOutline, chevronDownOutline, timeOutline } from 'ionicons/icons'
import React from 'react'
import PropertyPreview from '../components/PropertyPreview'


import Land1 from '../assets/images/land.png'

const LandSchehdule = () => {
    return (
        <IonPage color='primary'>
            <IonHeader color='default' className='ion-no-border py-3'>
                <IonToolbar color='default'>
                    <IonButtons>
                        <IonBackButton defaultHref='/property-detail' />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>


            <IonContent>

                <PropertyPreview description='3 Bedroom' imageURL={Land1} price='98,000,000' />

                <section className="mt-4 schedule-form-wrapper text-muted ion-padding">
                    <form action="">
                        <section>
                            <p className="bold lead-text">Select your prefred date and time</p>

                            <div className="input-wrapper d-flex justify-content-between light-bg my-2">
                                <div className='flx-center-y'>
                                    <IonIcon icon={calendarOutline} size='large' className='blue-text' />
                                    {/* TODO: dynamically update text with date time */}
                                    <IonText className='mx-2'>Select your preferable time</IonText>
                                </div>
                                <IonIcon icon={chevronDownOutline} size="large" />
                            </div>
                            <div className="input-wrapper d-flex justify-content-between light-bg my-2">
                                <div className='flx-center-y'>
                                    <IonIcon icon={timeOutline} size='large' className='blue-text' />
                                    {/* TODO: dynamically update text with selected time */}
                                    <IonText className='mx-2'>Select your preferable time</IonText>
                                </div>
                                <IonIcon icon={chevronDownOutline} size="large" />
                            </div>
                        </section>

                        <section className="mt-5">
                            <p className="bold lead-text">Additional Information</p>
                            <IonTextarea placeholder='Type something' rows={15} className="light-bg" />
                        </section>

                        <IonButton
                            type='submit'
                            fill='clear'
                            expand='block'
                            color='light'
                            className='blue-bg bold mt-5'>
                            Schedule Visit
                        </IonButton>
                    </form>
                </section>
            </IonContent>
        </IonPage >
    )
}

export default LandSchehdule