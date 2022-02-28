import { IonButton, IonContent, IonHeader, IonIcon, IonTitle, IonButtons, IonBackButton, IonInput, IonPage, IonRouterLink, IonText, IonToolbar } from '@ionic/react'
import React from 'react'
import { arrowBackCircleOutline } from 'ionicons/icons'

const VerifyPhone: React.FC = () => {

    // todo: implement react-form-hock
    // todo: convert all input to react-form-hook input
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar slot='start'>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>Back Button</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding' fullscreen>

                <header className='mt-5 pt-5'>
                    <h5 className="text-center blue-text">Verify Phone Number</h5>
                    <p className="mt-4 text-muted text-center">Enter 4 digit number that was <br /> sent to +1234567890</p>
                </header>
                <main>
                    <form action="">
                        <div className="d-flex justify-content-center w-50 mx-auto">

                            <IonInput
                                type='text'
                                placeholder='0'
                                className='border-bottom text-center mx-2 text-dark'
                            />
                            <IonInput
                                type='text'
                                placeholder='0'
                                className='border-bottom text-center mx-2 text-dark'
                            />
                            <IonInput
                                type='text'
                                placeholder='0'
                                className='border-bottom text-center mx-2 text-dark'
                            />
                            <IonInput
                                type='text'
                                placeholder='0'
                                className='border-bottom text-center mx-2 text-dark'
                            />
                        </div>
                        <IonButton
                            fill='clear'
                            size='large'
                            expand='block'
                            className='blue-bg mt-5 text-bold w-75 mx-auto'
                            color='light'
                            type='button'
                            // todo: refactor button to submit button
                            routerLink='/individual-verification'
                        >
                            Continue
                        </IonButton>

                        <section className="action mt-5 text-center">
                            <small className="blue-text text-center">
                                Code Expires in 0:20
                            </small>
                            <div className="mt-4 text-danger text-center">
                                <div>
                                    <IonRouterLink className='text-danger text-center mt-5'> Send code again</IonRouterLink>
                                </div>
                                <div>
                                    <IonRouterLink
                                        routerLink='/change-number'
                                        routerDirection='forward'
                                        className='text-danger text-center mt-5'>
                                        Change phone number
                                    </IonRouterLink>
                                </div>
                            </div>
                        </section>
                    </form>
                </main>
            </IonContent>
        </IonPage>
    )
}

export default VerifyPhone