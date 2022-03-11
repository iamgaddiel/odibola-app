import { IonButton, IonCol, IonContent, IonIcon, IonItem, IonList, IonPage, IonRow } from '@ionic/react'
import React from 'react'
import Header from '../components/Header'

// styles
import '../assets/css/app.css'
import { pencilOutline } from 'ionicons/icons'

const LandOffer = () => {
    return (
        <IonPage>
            <Header routerLink='/land-purchase' />

            <IonContent className='ion-padding'>
                <section className="offer-terms border rounded ion-padding text-muted ion-padding">
                    <h3 className="bold">Your offer</h3>

                    <section className="offer-text">
                        <p className='mt-3'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, quisquam debitis aspernatur reprehenderit saepe eum. Officiis hic veniam officia aut. Optio a expedita tenetur nulla id ipsam perspiciatis dignissimos, ea voluptates aut cumque, asperiores facere, corporis alias eligendi possimus aperiam. Odio dicta recusandae animi aperiam tempora quod repellendus cumque nam.

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum blanditiis perferendis, rerum doloribus tempore eligendi enim veniam cum officiis animi!
                        </p>

                    </section>
                </section>

                {/* Land Details  */}
                <section className="mt-4">
                    <IonList color='light' className='ion-padding-vertical'>
                        <IonItem slot='start' className='ion-justify-content-between'>
                            <div>
                                <small className="text-muted">
                                    Name of Entry
                                </small>
                                <h4 className="bold text-muted">ABCD eo</h4>
                            </div>
                            <IonIcon icon={pencilOutline} className='text-muted' slot='end' />
                        </IonItem>
                        <IonItem slot='start' className='ion-justify-content-between'>
                            <div>
                                <small className="text-muted">
                                    Name of Entry
                                </small>
                                <h4 className="bold text-muted">RC123456</h4>
                            </div>
                        </IonItem>
                        <IonItem slot='start' className='ion-justify-content-between'>
                            <div>
                                <small className="text-muted">
                                    Name to appear on sublease
                                </small>
                                <h4 className="bold text-muted">ABC Cor Real Estate Fund</h4>
                            </div>
                        </IonItem>
                        <IonItem slot='start' className='ion-justify-content-between'>
                            <div>
                                <small className="text-muted">
                                    Address to appear on sublease
                                </small>
                                <h4 className="bold text-muted">1, Glover Street, Ikoyi, Lagos</h4>
                            </div>
                        </IonItem>
                        <IonItem slot='start' className='ion-justify-content-between'>
                            <div>
                                <small className="text-muted">
                                    Plot size
                                </small>
                                <h4 className="bold text-muted">600 SQMs</h4>
                            </div>
                        </IonItem>
                    </IonList>
                </section>

                <section className="offer-terms border rounded ion-padding text-muted">
                    <section className="ion-padding border-bottom">
                        <h4 className="bold">Total cost</h4>
                        <h1>N98,000,000.00</h1>
                    </section>
                    <section className="ion-padding">
                        <h4 className="bold">Total cost</h4>
                        <ul className='ion-no-padding list-style-non'>
                            <li className="blue-text">
                                <span>Land Cost</span>
                                <span className='mx-5'>N20,000,000</span>
                            </li>
                            <li className="blue-text">
                                <span>Land Cost</span>
                                <span className='mx-5'>N20,000,000</span>
                            </li>
                        </ul>
                    </section>

                </section>

                <section className='ion-margin-vertical flx-center-y'>
                    <input type='checkbox' className="text-muted"></input>
                    <span className="text-muted">I confirm that the details above are correct</span>
                </section>

                <section className='ion-margin-top'>
                    <IonRow className='ion-justify-content-between'>
                        <IonCol size="6">
                            <IonButton
                                fill='clear'
                                className='gray-bg w-100 rounded bold'
                                color='light'
                                routerDirection='back'
                                routerLink=''>Reject Offer</IonButton>
                        </IonCol>
                        <IonCol size="6">
                            <IonButton
                                fill='clear'
                                className='blue-bg w-100 rounded bold'
                                color='light'
                                routerDirection='back'
                                routerLink='/land-accepted-offer'
                            >Accept Offer</IonButton>
                        </IonCol>
                    </IonRow>

                </section>
            </IonContent>
        </IonPage>
    )
}

export default LandOffer