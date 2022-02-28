import { IonContent, IonLabel, IonPage, IonRouterLink, IonSegment, IonSegmentButton, IonSlide, IonSlides } from '@ionic/react'
import React, { useState } from 'react'

import RegLogo from '../assets/images/Groupapp-logo-blue.png'
import '../assets/css/reg.css'
import IndividualReg from '../components/IndividualReg'
import OrganizationReg from '../components/OrganizationReg'


const Registration: React.FC = () => {
    let [regType, setRegType] = useState<string>()


    const handleSegmentChange = (e: any) => {
        const regSegmentValue = e.detail.value;
        if (regSegmentValue === 'individual') {
            setRegType('individual')
        }
        else if (regSegmentValue === 'organization') {
            setRegType('organization')
        }
    }

    return (
        <IonPage>
            <IonContent fullscreen className='ion-padding'>
                <header className='mt-5'>
                    <div className="reg-logo">
                        <img src={RegLogo} alt="odibola-white-logo" />
                    </div>
                    <div className="header-text ion-text-center">
                        <h3 className='blue-text bold mt-3'>Welcome to Odibola</h3>
                        <small className="gray-text">
                            Register or
                            <IonRouterLink href='/'> Sign in</IonRouterLink>
                            and we’ll get you started
                        </small>
                    </div>
                </header>
                <main className='ion-padding ion-margin-up'>
                    <IonSegment onIonChange={handleSegmentChange} value="Individual">
                        <IonSegmentButton value="individual">
                            <IonLabel className='blue-text'>individual</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="organization">
                            <IonLabel className='blue-text'>Organization</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>

                    <section className="ion-margin-top">

                        {/* form components render*/}
                        {regType === 'individual'
                            ? <IndividualReg />
                            : <OrganizationReg />
                        } 

                        <section className="t-and-c">
                            <small className="text-muted">
                                By tapping continue, I accept Odibol's
                                <IonRouterLink
                                    routerDirection='forward'
                                >term of use</IonRouterLink>
                            </small>
                        </section>
                    </section>

                </main>
            </IonContent>
        </IonPage>
    )
}

export default Registration