import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonToolbar } from '@ionic/react'
import React from 'react'
import { cameraOutline } from 'ionicons/icons'

// images
import FrontID from '../assets/svgs/front-id.svg';

const ScanNationalIDFront = () => {
    return (
        <IonPage>
            <IonHeader className='ion-no-border py-2'>
                <IonToolbar color='default'>
                    <IonButtons slot='start'>
                        <IonBackButton color="dark" defaultHref='/individual-verification' />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className='ion-padding'>
                <section className='form-header mt-5 pt-5 text-center'>
                    <h1 className="text-center blue-text bold">Verify Identity</h1>
                    <h4 className="mt-4 text-muted bold">Scan the front</h4>
                    <h5 className="text-muted mt-4">Take a photo of the front of your National ID Cad</h5>
                </section>

                <form action="">
                    <section className="scanner my-5">
                        <div className="scan-img-wrapper">
                            <IonImg src={FrontID} />
                        </div>
                    </section>
                    <section>
                        {/* take photo button */}
                        <IonButton
                            className='blue-bg'
                            fill="clear"
                            expand='block'
                            slot='start'
                            color='light'
                        >
                            <IonIcon icon={cameraOutline} className="mx-2" />
                            Take Photo
                        </IonButton>

                        {/* continue button */}
                        <IonButton
                            className='blue-bg mt-4'
                            fill="clear"
                            expand='block'
                            color='light'
                        >
                            Continue
                        </IonButton>
                    </section>
                </form>
            </IonContent>
        </IonPage>
    )
}

export default ScanNationalIDFront