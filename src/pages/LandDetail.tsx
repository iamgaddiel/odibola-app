import { IonPage, IonContent, IonImg, IonRouterLink, IonIcon, IonGrid, IonRow, IonCol, IonButton, IonLabel, IonInput, IonSelect, IonSelectOption } from '@ionic/react'
import { alertCircleOutline, carOutline } from 'ionicons/icons'
import React, { useState } from 'react'

// images
import Land1 from '../assets/images/land.png'

const LandDetail = () => {

    let [plotSize, setPlotSize] = useState<string>('');


    return (
        <IonPage>
            <IonContent className='ion-padding' fullscreen>
                <main>
                    <div className="detail-image-container">
                        <IonImg src={Land1} alt='' />
                    </div>

                    <div className="price-details ion-padding text-center">
                        <h4 className="bold heading text-muted">Condominium and Lake</h4>
                        <p className="lead-text">19, St. Adeola Odeku, Lekki, Lagos.</p>
                        <h3 className="bold heading text-muted">N30,000,000 per SQM</h3>
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
                                        <IonImg src={Land1} alt='' />
                                    </div>
                                </IonCol>
                                <IonCol size='3'>
                                    <div className="gallery-preview">
                                        <IonImg src={Land1} alt='' />
                                    </div>
                                </IonCol>
                                <IonCol size='3'>
                                    <div className="gallery-preview">
                                        <IonImg src={Land1} alt='' />
                                    </div>
                                </IonCol>
                                <IonCol size='3'>
                                    <div className="gallery-preview">
                                        <IonImg src={Land1} alt='' />
                                    </div>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </section>

                    <section className="primary-notice-border ion-padding primary-notice-bg mt-4 mx-3">
                        <IonIcon icon={alertCircleOutline} color="primaryy" />
                        <span className="mx-2 bold">Take Note</span>
                        <p className="text-muted mt-3">
                            Scheduling visits to our lands are only open to those who have the intent to buy.
                        </p>
                    </section>

                    <section className="mt-4 ion-padding">
                        <div className="d-flex justify-content-between">
                            {/* todo: left the opetions fill 80% */}
                            <div className=''>
                                <IonLabel className='bold text-muted'>Size of plot</IonLabel>
                                <IonSelect name='measruement' value={plotSize} onIonChange={(data) => setPlotSize(data.detail.value)}>
                                    <IonSelectOption value='600'>600 SQM</IonSelectOption>
                                </IonSelect>
                            </div>
                            <div>
                                <IonLabel className='text-muted bold'>Quantity</IonLabel>
                                <IonInput type='number'  />
                            </div>
                        </div>
                    </section>

                    <section className="btns">
                        <IonButton
                            fill='clear'
                            expand='block'
                            className='blue-btn'
                            routerDirection='forward'
                            routerLink='/schedule-land'
                        // color='light'
                        >
                            Purchase
                        </IonButton>
                    </section>
                </main>
            </IonContent>
        </IonPage >
    )
}

export default LandDetail