import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonButton, IonIcon, IonCard, IonCardContent, IonSlides, IonSlide, IonImg, IonFab, IonFabButton } from '@ionic/react'
import { filterOutline, funnelOutline, carOutline, heartOutline } from 'ionicons/icons'
import React from 'react'
import Home1 from '../assets/svgs/home-1.svg'
import Home2 from '../assets/svgs/home-2.svg'
import Header from '../components/Header'



const HouseList: React.FC = () => {
    const slideOptions = {
        speed: 400,
        slidesPerView: 1,
        spaceBetween: 10,
        effect: 'slide',
    }

    return (
        <IonPage>
            <Header routerLink='/dashboard' />


            <IonContent>
                <header className='text-center ion-padding'>
                    <h1 className="bold heading">All 10 Homes</h1>
                    <p className="lead lead-text">Browse through to find your next home!</p>
                </header>

                <main>
                    <div className="action-btns d-flex justify-content-even m-0 p-0">
                        <IonButton
                            color='default'
                            className='light-gray-bg text-dark ion-no-border w-50'
                            fill='clear'
                            expand='full'
                            size='large'
                        >
                            Filter
                            <IonIcon icon={filterOutline} slot='end' />
                        </IonButton>
                        <IonButton
                            color='default'
                            className='light-gray-bg text-dark ion-no-border w-50'
                            fill='clear'
                            expand='block'
                            size='large'
                        >
                            Sort
                            <IonIcon icon={funnelOutline} slot='end' />
                        </IonButton>
                    </div>


                    {/* lands list */}
                    <section className="lands">
                        <IonCard routerDirection='forward' routerLink='/property-detail'>
                            <IonFab vertical='top' horizontal='end' color='default'>
                                <IonFabButton color='default'>
                                    <IonIcon icon={heartOutline} color="light" />
                                </IonFabButton>
                            </IonFab>

                            <IonCardContent>
                                {/* image slides */}
                                <IonSlides options={slideOptions} pager={true}>
                                    <IonSlide>
                                        <div className="card-image-lg">
                                            <IonImg src={Home1} alt='' />
                                        </div>
                                    </IonSlide>
                                    <IonSlide>
                                        <div className="card-image-lg">
                                            <IonImg src={Home1} alt=' ' />
                                        </div>
                                    </IonSlide>
                                    <IonSlide>
                                        <div className="card-image-lg">
                                            <IonImg src={Home1} alt='' />
                                        </div>
                                    </IonSlide>
                                </IonSlides>

                                <section className="card-details text-left mt-5">
                                    <h1 className="bold text-left">N98,000,000</h1>
                                    <h3 className="lead-text">3 Bed Room </h3>
                                </section>

                                <section className="card-icons d-flex justify-content-between mt-2">
                                    <div className='text-dark'>
                                        <IonIcon icon={carOutline} size="large" />
                                        <span className="mx-1 lead-text">2</span>
                                    </div>
                                    <div className='text-dark'>
                                        {/* <FontAwesomeIcon icon={'user-secret'} /> */}
                                        <IonIcon icon={carOutline} size="large" />
                                        <span className="mx-1 lead-text">2</span>
                                    </div>
                                    <div className='text-dark'>
                                        <IonIcon icon={carOutline} size="large" />
                                        <span className="mx-1 lead-text">1560 sqft</span>
                                    </div>
                                </section>

                                <section className="d-flex mt-4">
                                    <IonButton
                                        fill='clear'
                                        expand='block'
                                        className='w-50 blue-btn-outline'
                                    // color="light"
                                    >
                                        Schedule Visit
                                    </IonButton>
                                    <IonButton
                                        fill='clear'
                                        expand='block'
                                        className=' w-50 blue-btn'
                                    // color='light'
                                    >
                                        Purchase
                                    </IonButton>
                                </section>
                            </IonCardContent>
                        </IonCard>
                    </section>
                </main>
            </IonContent>
        </IonPage>
    )
}

export default HouseList