import { IonPage, IonContent, IonIcon, IonCard, IonList, IonItem, IonButton, IonInput, IonImg } from '@ionic/react'
import { lockClosedOutline, copyOutline } from 'ionicons/icons'
import React from 'react'
import Header from '../components/Header'

// import images
import UploadImage from '../assets/svgs/upload-image.svg';

const HomeProofOfPayment = () => {
    return (
        <IonPage>
            <Header routerLink='/home-payment-option' />


            <IonContent className='ion-padding'>
                <h1 className='text-muted text-center bold'>Upload Proof of Payment</h1>

                <section className='mt-5'>
                    <div className="warning-bg ion-padding rounded d-flex mt-2">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 2L15 2C15.5523 2 16 1.55228 16 1C16 0.447715 15.5523 0 15 0L1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2Z" fill="#FFBF29" />
                            <path d="M16 3V1C16 0.447715 15.5523 0 15 0C14.4477 0 14 0.447715 14 1V3C14 3.55228 14.4477 4 15 4C15.5523 4 16 3.55228 16 3Z" fill="#FFBF29" />
                            <path d="M2 3V1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1L0 3C0 3.55228 0.447715 4 1 4C1.55228 4 2 3.55228 2 3Z" fill="#FFBF29" />
                            <path d="M4 9.99992C3.84476 9.99992 3.69164 9.96378 3.55279 9.89435C3.41393 9.82492 3.29315 9.72412 3.2 9.59992C3.12121 9.49486 3.06388 9.37532 3.03129 9.2481C2.99869 9.12089 2.99148 8.9885 3.01005 8.8585C3.02862 8.7285 3.07262 8.60343 3.13953 8.49043C3.20643 8.37743 3.29494 8.27871 3.4 8.19992L7.4 5.19992C7.57126 5.07477 7.77788 5.00732 7.99 5.00732C8.20212 5.00732 8.40874 5.07477 8.58 5.19992L12.58 8.01992C12.7956 8.17286 12.9419 8.40493 12.9868 8.6654C13.0318 8.92587 12.9718 9.19355 12.82 9.40992C12.7442 9.51807 12.6478 9.61014 12.5362 9.68082C12.4246 9.75149 12.3002 9.79936 12.17 9.82168C12.0399 9.84399 11.9066 9.8403 11.7778 9.81082C11.6491 9.78134 11.5275 9.72666 11.42 9.64992L8 7.23992L4.6 9.79992C4.4269 9.92974 4.21637 9.99992 4 9.99992Z" fill="#FFBF29" />
                            <path d="M8 17C7.73478 17 7.48043 16.8946 7.29289 16.7071C7.10536 16.5196 7 16.2652 7 16V8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8V16C9 16.2652 8.89464 16.5196 8.70711 16.7071C8.51957 16.8946 8.26522 17 8 17Z" fill="#FFBF29" />
                        </svg>

                        <div className='mx-3'>
                            <h6 className="bold">Upload proof of payment</h6>
                            <p className="text-muted ">
                                Please take a screenshot of your transfer details and upload it below.
                            </p>
                        </div>
                    </div>
                </section>

                <section className='mt-4'>
                    <form action="">
                        <div className="input-wrapper light-bg">
                            <IonInput type='text' placeholder="Account Holder's Full Name" />
                        </div>

                        <div className="upload-decoy mt-4">

                            {/* todo: remove picture when file is uploaded/taken */}
                            <IonImg src={UploadImage} alt='' onClick={() => console.log('when')} />
                            
                        </div>
                    </form>
                </section>

                <IonButton
                    fill='clear'
                    expand='block'
                    color='light'
                    className='blue-bg mt-5'

                    //remove
                    routerDirection='forward'
                    routerLink='/contract-of-sale'
                    // type='submit' <= todo
                >
                    Complete
                </IonButton>

            </IonContent>
        </IonPage >
    )
}

export default HomeProofOfPayment