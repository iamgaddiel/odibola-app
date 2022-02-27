import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonPage, IonRouterLink, IonRow } from '@ionic/react'
import { carOutline } from 'ionicons/icons'
import React from 'react'

// image
import Home1 from '../assets/images/home.png'

// css
import '../assets/css/app.css'


const PropertyDetail = () => {
    return (
        <IonPage>
            <IonContent className='ion-padding' fullscreen>
                <main>
                    <div className="detail-image-container">
                        <IonImg src={Home1} alt='' />
                    </div>

                    <div className="price-details ion-padding">
                        <h1 className="bold heading text-muted">N92,000,00</h1>
                        <h4 className="lead-text">3 red rooms detached</h4>

                        <section className="card-icons d-flex justify-content-between mt-2">

                            <IonRouterLink slot='start' color='dark'>
                                <IonIcon icon={carOutline} size='large ' />
                                <span className="mx-1 lead-text">2</span>
                            </IonRouterLink>

                            <IonRouterLink slot='start' color='dark'>
                                {/* <FontAwesomeIcon icon={'user-secret'} /> */}
                                <IonIcon icon={carOutline} size='large' />
                                <span className="mx-1 lead-text">2</span>
                            </IonRouterLink>
                            <IonRouterLink slot='start' color='dark'>
                                <IonIcon icon={carOutline} size='large' />
                                <span className="mx-1 lead-text">1560 sqft</span>
                            </IonRouterLink>
                        </section>

                    </div>

                    <section className="property-description">
                        <h5 className="text-muted">
                            Clean and minimalist house with modern interiors built in
                            the middle of the city making it easier for you to access the city malls.
                        </h5>
                    </section>

                    <section className="mt-4 w-100">
                        <h5 className="text-muted">Gallery</h5>
                        <IonGrid>
                            <IonRow>
                                <IonCol size='3'>
                                    <div className="gallery-preview">
                                        <IonImg src={Home1} alt='' />
                                    </div>
                                </IonCol>
                                <IonCol size='3'>
                                    <div className="gallery-preview">
                                        <IonImg src={Home1} alt='' />
                                    </div>
                                </IonCol>
                                <IonCol size='3'>
                                    <div className="gallery-preview">
                                        <IonImg src={Home1} alt='' />
                                    </div>
                                </IonCol>
                                <IonCol size='3'>
                                    <div className="gallery-preview">
                                        <IonImg src={Home1} alt='' />
                                    </div>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </section>

                    <section className="mt-4 w-100">
                        <h5 className="text-muted">Address</h5>
                        <div className="section wrapper light-blue-bg">
                            <p className="muted ion-padding">
                                19 Street - Odibola Apartment, Ozumba Mbadiwe, Lekki, Lagos, Nigeria.
                            </p>
                        </div>
                    </section>

                    <section className="w-100 mt-5">
                        <h5 className="text-muted">Pricee Details</h5>
                        <div className="section wrapper ion-padding light-blue-bg">
                            <ul className='d-flex'>
                                <li className='mx-3'>2 Bedrooms</li>
                                <li className='mx-3'>2 Bedrooms</li>
                                <li className='mx-3'>1 Balconys</li>
                            </ul>
                            <small>
                                <IonGrid>
                                    <IonRow className='ion-align-items-center ion-justify-content-between'>
                                        <IonCol size='6' className='border-right ion-justify-self-end'>Area</IonCol>
                                        <IonCol size='6'>1234sqft</IonCol>
                                    </IonRow>
                                    <IonRow className='ion-align-items-center'>
                                        <IonCol size='6' className='border-right'>Prototype</IonCol>
                                        <IonCol size='6'>1234sqft</IonCol>
                                    </IonRow>
                                    <IonRow className='ion-align-items-center'>
                                        <IonCol size='6' className='border-right'>Funishing</IonCol>
                                        <IonCol size='6'>1234sqft</IonCol>
                                    </IonRow>
                                    <IonRow className='ion-align-items-center'>
                                        <IonCol size='6' className='border-right'>Floor</IonCol>
                                        <IonCol size='6'>1234sqft</IonCol>
                                    </IonRow>
                                    <IonRow className='ion-align-items-center'>
                                        <IonCol size='6' className='border-right'>Propertry </IonCol>
                                        <IonCol size='6'>1234sqft</IonCol>
                                    </IonRow>
                                </IonGrid>
                            </small>
                        </div>
                    </section>

                    <section className="w-100 mt-5">
                        <h5 className="text-muted">Property Details</h5>
                        <div className="section wrapper ion-padding light-blue-bg">
                            <small>
                                <IonGrid>
                                    <IonRow className='ion-align-items-center ion-justify-content-between'>
                                        <IonCol size='6' className='border-right'>Total cost</IonCol>
                                        <IonCol size='6'>19,000,00</IonCol>
                                    </IonRow>
                                    <IonRow className='ion-align-items-center'>
                                        <IonCol size='6' className='border-right'>Deposit</IonCol>
                                        <IonCol size='6'>20,000,000</IonCol>
                                    </IonRow>

                                </IonGrid>
                            </small>
                        </div>
                    </section>

                    <section className="btns">
                        <section className="d-flex mt-4">
                            <IonButton
                                fill='clear'
                                expand='block'
                                className='w-50 blue-btn-outline'
                                routerLink='/schedule-home'
                                routerDirection='forward'
                            // color="light"
                            >
                                Schedule Visit
                            </IonButton>
                            <IonButton
                                fill='clear'
                                expand='block'
                                className=' w-50 blue-btn'
                                routerDirection='forward'
                                routerLink='/home-payment-option'
                            >
                                Purchase
                            </IonButton>
                        </section>
                    </section>
                </main>
            </IonContent>
        </IonPage >
    )
}

export default PropertyDetail