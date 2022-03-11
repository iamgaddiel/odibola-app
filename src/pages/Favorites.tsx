import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import EmptyFavorite from '../components/EmptyFavorite'
import FavoritesList from '../components/FavoritesList'

const Favorites = () => {

  let favorites: string[] = ["121"]

  return (
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar className='ion-padding'>
          <IonTitle className='ion-text-center bold txt-20'>My Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        {
          favorites.length > 0
          ? <FavoritesList />
          : <EmptyFavorite />
        }
      </IonContent>
    </IonPage>
  )
}

export default Favorites