import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonText } from '@ionic/react'
import FavoriteCard from './FavoriteCard'
import {  trashOutline } from 'ionicons/icons'

const FavoritesList = () => {
  let array = [1, 2, 3, 5, 1, 2, 3, 4, 5, 6]

  const deleteFavorite = () => console.log(this, 'deleted')

  return (
    <IonList lines='none'>
      {
        array.map((fruit: any, index) =>
        (
          <IonItemSliding key={index} className='ion-no-border'>
            <IonItemOptions side='end'>
              <IonItemOption color='danger' expandable onClick={deleteFavorite}>
                <IonIcon icon={trashOutline} color='light' slot='top' size='large' />
                <IonText>Remove</IonText>
              </IonItemOption>
            </IonItemOptions>

            <IonItem lines='none'>
              <FavoriteCard
                imageUrl='https://picsum.photos/200'
                title='N98,000,000'
                location='kldfslfjj ljsflfj sfsdf'
                price='130, 000'
              />
            </IonItem>
          </IonItemSliding>
        )
        )
      }
    </IonList>
  )
}

export default FavoritesList