import { IonHeader, IonToolbar, IonSearchbar, IonButton, IonIcon } from '@ionic/react'
import { filterOutline } from 'ionicons/icons'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { register } from '../serviceWorkerRegistration';



interface searchHeaderInterface {
  isModalOpen: boolean,
  setIsModalOpen: any
}

interface search {
  searchText: string
}

const SearchHeader = ({ isModalOpen, setIsModalOpen }: searchHeaderInterface) => {
  let [searchValue, setSearchValue] = useState<string>('');
  const setSearchInput = (data: any) => setSearchValue(data)
  const { register, handleSubmit } = useForm<search>(); // * react-form-hooks


  const handleSearch: SubmitHandler<search> = (data: any) => {
    data.preventDefault();
    console.log(data)
    // todo: handle submit for for search
  }

  return (
    <IonHeader className='py-3 ion-no-border' translucent>
      <IonToolbar>
        <h3 className="bold txt-16 ion-padding">Search</h3>
        <section className="d-flex justify-content-between align-items-center">
          <form action="" className='ion-padding w-100'>
            <IonSearchbar
              type='search'
              showClearButton='focus'
              placeholder='Search for your property'
              inputMode='search'
              value={searchValue}
              onIonChange={(e: any) => console.log(e.detail.value)}
              // onIonChange={(searchText: any) => setSearchInput(searchText.detail.value)}
              onSubmit={handleSubmit(handleSearch)}
            />
          </form>

          {/* filter button */}
          <IonButton fill='clear' onClick={() => setIsModalOpen(!isModalOpen)}>
            <IonIcon icon={filterOutline} />
          </IonButton>
        </section>
      </IonToolbar>
    </IonHeader >
  )
}

export default SearchHeader