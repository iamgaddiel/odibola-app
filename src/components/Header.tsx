import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonBackButton } from '@ionic/react'
import React from 'react'


interface headerProps {
    routerLink: string,
}

const Header = ({ routerLink }: headerProps) => {
    return (
        <IonHeader color='default' className='ion-no-border py-3' collapse='fade'>
            <IonToolbar color='default'>
                <IonButtons>
                    <IonBackButton defaultHref={routerLink} />
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    )
}

export default Header