import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonButton, IonIcon, IonCard, IonFab, IonFabButton, IonCardContent, IonSlides, IonSlide, IonImg, IonList, IonItem, IonInput, IonTextarea, IonText, IonBackdrop, IonGrid, IonRow, IonCol } from '@ionic/react'
import { time } from 'console';
import { carOutline, calendarClearOutline, calendar, calendarClearSharp, timeOutline, timeSharp, caretDownOutline, calendarOutline, chevronDownOutline, closeOutline, closeCircleOutline } from 'ionicons/icons'
import React from 'react'

// css
import '../assets/css/reg.css';

// image
import Home1 from '../assets/images/home.png'
import Header from '../components/Header';


//components
import PropertyPreview from '../components/PropertyPreview';


const HomeScheduleVisit: React.FC = () => {
    
    return (
        <IonPage color='primary'>
            <Header routerLink='/property-detail' />

            <IonContent>

                <PropertyPreview description='3 Bedroom' imageURL={Home1} price='98,000,000' />

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

export default HomeScheduleVisit