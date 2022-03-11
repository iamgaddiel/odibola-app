import { IonPage, IonContent, IonImg, IonGrid, IonRow, IonCol, IonLabel, IonSelect, IonSelectOption, IonInput, IonButton } from '@ionic/react'
import React, { useState } from 'react'


// images
import Land1 from '../assets/images/land.png'
import Header from '../components/Header'


const LandPurchase = () => {
    let [plotSize, setPlotSize] = useState<string>('');

    return (
        <IonPage>
            <Header routerLink='/lands' />
            <IonContent className='ion-padding' fullscreen>
                <h1 className='text-muted text-center my-3 bold'>Register Interest</h1>
                <main>
                    <div className="detail-image-container">
                        <IonImg src={Land1} alt='' />
                    </div>

                    <div className="price-details ion-padding text-center">
                        <h4 className="bold heading text-muted">Condominium and Lake</h4>
                        <p className="lead-text">19, St. Adeola Odeku, Lekki, Lagos.</p>
                        <h3 className="bold heading text-muted">N30,000,000 per SQM</h3>
                    </div>


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

                    <section className="mt-4 ion-padding">
                        <div className="d-flex justify-content-between">
                            {/* todo: left the opetions fill 80% */}
                            <div className=''>
                                <IonLabel className='bold text-muted'>Size of plot</IonLabel>
                                <IonSelect
                                    name='measruement'
                                    value={plotSize}
                                    placeholder='Plot Size'
                                    onIonChange={(data) => setPlotSize(data.detail.value)}>
                                    <IonSelectOption value='600'>600 SQM</IonSelectOption>
                                </IonSelect>
                            </div>
                            <div>
                                <IonLabel className='text-muted bold'>Quantity</IonLabel>
                                <IonInput type='number' />
                            </div>
                        </div>
                    </section>


                    <section className="primary-notice-bg my-2 p-2">
                        <p className="blue-text bold mt-3">
                            For this particular land, we have only 15 plots (9000 SQM) available for sale
                        </p>
                    </section>

                    <section className="my-3 text-muted ion-padding ">
                        <input type='checkbox' name='agreed_to_terms' />
                        <span className="mx-2">I confirm that the details above are correct</span>
                    </section>

                    {/* buttons */}
                    <section className="d-flex justify-content-between">
                        <IonButton
                            fill='clear'
                            expand='block'
                            className='gray-btn w-50'
                            routerDirection='forward'
                            routerLink='/schedule-land'
                            color='dark'
                        >
                            Cancel
                        </IonButton>

                        {/* proceed button */}
                        <IonButton
                            fill='clear'
                            expand='block'
                            className='blue-btn w-50'
                            routerDirection='forward'
                            routerLink='/land-offer'
                        >
                            Proceed
                        </IonButton>
                    </section>
                </main>
            </IonContent>
        </IonPage >
    )
}

export default LandPurchase