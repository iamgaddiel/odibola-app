import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonImg, IonButton, IonIcon } from '@ionic/react'
import { cameraOutline } from 'ionicons/icons'
import React from 'react'

// images
import SuccessImage from '../assets/svgs/verification-success.svg'

const AccountVerified = () => {
    return (
        <IonPage>
            <IonContent fullscreen className='ion-padding'>
                <section className='form-header mt-5 pt-5 text-center'>
                    <h1 className="text-center blue-text bold">Successfully Completed</h1>
                </section>

                    <section className="scanner my-5">
                        <div className="scan-img-wrapper">
                            <IonImg src={SuccessImage} />
                        </div>
                    </section>
                    <section className='ion-padding text-center'>
                        <h4 className="text-muted">Voila! You have successfully</h4>
                        <h4 className='text-muted'>verified your account</h4>
                    </section>
            </IonContent>
        </IonPage>
    )
}

export default AccountVerified