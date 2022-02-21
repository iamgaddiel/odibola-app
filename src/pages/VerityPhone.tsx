import { IonContent, IonHeader, IonIcon, IonPage, IonRouterLink, IonToolbar } from '@ionic/react'
import React from 'react'
import {arrowBackCircleOutline} from 'ionicons/icons'

const VerityPhone: React.FC = () => {
  return (
    <IonPage>
        <IonContent>
            <IonHeader>
                <IonToolbar slot='start'>
                    <IonRouterLink href='#'>
                        <IonIcon icon={arrowBackCircleOutline} />
                        <small className="text-dark">Back</small>
                    </IonRouterLink>
                    
                </IonToolbar>
            </IonHeader>
        </IonContent>
    </IonPage>
  )
}

export default VerityPhone