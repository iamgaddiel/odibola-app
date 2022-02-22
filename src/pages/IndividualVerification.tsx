import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRouterLink,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  IonBadge,
  IonImg
} from '@ionic/react'
import React, { useState } from 'react'
import { chevronForwardOutline, personOutline, arrowBackOutline } from 'ionicons/icons'
import UserProfile from '../assets/svgs/person.svg';
import Passport from '../assets/svgs/passport.svg';

// styles
import File from '../assets/svgs/file.svg';

import '../assets/css/verification.css';

const IndividualVerification: React.FC = () => {
  let [select, setSelect] = useState<string>("");

  const handleOnchange = (data: any) => setSelect(data.default.value)


  return (
    <IonPage>
      <IonHeader translucent className='ion-no-border py-3'>
        <IonToolbar color='default'>
          <IonButtons>
            <IonBackButton defaultHref='/verify-phone' />
            <IonTitle className='blue-text'>Step 1/2</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className='ion-padding'>
        <main>
          <section className='form-header mt-5'>
            <h6 className="text-center blue-text bold">Verify Identity</h6>
            <p className="mt-4 text-muted text-center">We are almost done, Now Let's <br /> verify your identify</p>
          </section>

          <form action="">
            {/* <IonSelect value={select} onIonChange={handleOnchange} placeholder="Choose your document type">
              <IonSelectOption value="pdf">PDF</IonSelectOption>
              <IonSelectOption value="pdf">Txt</IonSelectOption>
              <IonSelectOption value="pdf">Docx</IonSelectOption>
            </IonSelect> */}
            <p className="blue-text ion-padding">Choose your document type</p>

            <div className="form-card">
              {/* national Id */}
              <IonCard
                routerDirection='forward'
                routerLink='/scan-national-id'
                className='ion-padding d-flex align-items-center'>
                <div className='d-flex align-items-center'>
                  <div className="img-container">
                    <IonImg src={UserProfile} className="ion-margin-right" />
                  </div>
                  <div className='mx-3 d-flex justify-content-between w-100 align-items-center'>
                    <div>
                      <h6 className="text-muted">National ID Card</h6>
                      <IonBadge color="success">Recommended</IonBadge>
                    </div>
                    <div>
                      <IonIcon icon={chevronForwardOutline} className="blue-text" />
                    </div>
                  </div>
                </div>
              </IonCard>


              {/*  Id card */}
              <IonCard
                routerDirection='forward'
                routerLink=''
                className='ion-padding d-flex align-items-center justify-content-between ml-0'>
                <div className='d-flex align-items-center'>
                  <div className="img-container">
                    <IonImg src={UserProfile} className="ion-margin-right" />
                  </div>
                  <h6 className="text-muted mx-3">ID Card</h6>
                </div>
                <IonIcon icon={chevronForwardOutline} className="blue-text" />
              </IonCard>


              {/* passport */}
              <IonCard
                routerDirection='forward'
                routerLink=''
                className='ion-padding d-flex align-items-center justify-content-between ml-0'>
                <div className='d-flex align-items-center'>
                  <div className="img-container">
                    <IonImg src={Passport} className="ion-margin-right" />
                  </div>
                  <h6 className="text-muted mx-3">Passport</h6>
                </div>
                <IonIcon icon={chevronForwardOutline} className="blue-text" />
              </IonCard>

            </div>
          </form>
        </main>
      </IonContent>
    </IonPage >
  )
}

export default IndividualVerification