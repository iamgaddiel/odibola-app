import { IonContent, IonLabel, IonPage, IonSegment, IonSegmentButton } from '@ionic/react'
import { useState } from 'react'
import FilterModal from '../components/FilterModal';
import PropertyCard from '../components/PropertyCard';
import SearchHeader from '../components/SearchHeader';


const Search = () => {
  
  // * useStates
  let [segmentValue, setSegmentValue] = useState<string>('');
  let [isModalOpen, setIsModalOpen] = useState<boolean>(false);


  const updateSegmentValue = (data: any) => setSegmentValue(data)

  // todo: replace random images to api images

  const properties = [
    {
      description: '19, St. Adeola Odeku, Lekki, Lagos.1',
      propertyTitle: 'Condominium and Lake',
      size: 'N30,000,000 per SQM',
      propertyType: 'lands',
      images: [
        'https://picsum.photos/200',
        'https://picsum.photos/200',
        'https://picsum.photos/200'
      ]
    },
    {
      description: '19, St. Adeola Odeku, Lekki, Lagos.2',
      propertyTitle: 'Condominium and Lake',
      size: 'N30,000,000 per SQM',
      propertyType: 'lands',
      images: [
        'https://picsum.photos/200',
        'https://picsum.photos/200',
        'https://picsum.photos/200'
      ]
    },
    {
      description: '19, St. Adeola Odeku, Lekki, Lagos.3',
      propertyTitle: 'Condominium and Lake',
      size: 'N30,000,000 per SQM',
      propertyType: 'homes',
      noOfBedrooms: 34,
      noOfShowers: 21,
      images: [
        'https://picsum.photos/200',
        'https://picsum.photos/200',
        'https://picsum.photos/200'
      ]
    }
  ]

  const renderPropertyCard = () => {

    if (segmentValue === 'all') {
      return properties.map(({
        description,
        propertyTitle,
        size,
        propertyType,
        images,
        noOfShowers,
        noOfBedrooms
      }, key) => (
        <PropertyCard
          description={description}
          propertyTitle={propertyTitle}
          size={size}
          propertyType={propertyType}
          images={images}
          noOfBedrooms={noOfBedrooms}
          noOfShowers={noOfShowers}
          key={key}
        />
      ))
    }


    else if (segmentValue === 'lands') {
      return properties.filter((property) => property.propertyType === "lands").map(({
        description,
        propertyTitle,
        size,
        images,
      }, key) => (
        <PropertyCard
          description={description}
          propertyTitle={propertyTitle}
          size={size}
          propertyType='lands'
          images={images}
          key={key}
        />
      ))
    }


    else if (segmentValue === 'homes') {
      console.log("it's home now")
      return properties.filter((property) => property.propertyType === "homes").map(({
        description,
        propertyTitle,
        size,
        images,
        noOfShowers,
        noOfBedrooms
      }, key) => (
        <PropertyCard
          description={description}
          propertyTitle={propertyTitle}
          size={size}
          propertyType='homes'
          images={images}
          noOfBedrooms={noOfBedrooms}
          noOfShowers={noOfShowers}
          key={key}
        />
      ))
    }
  }

  return (
    <IonPage>

      {/* search header */}
      <SearchHeader isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <IonContent className='ion-padding'>

        {/* ============== sheet modal ================== */}
        <FilterModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />


        {/* ================ Text ================ */}
        <section className='ion-padding'>
          <h1 className='txt-24'>Let’s help find the best property for you!</h1>
        </section>

        {/*==================================  category segment ========================= */}
        <section className='ion-padding'>
          <h3 className='txt-16'>Category</h3>
          <IonSegment onIonChange={e => updateSegmentValue(e.detail.value)} value={segmentValue}>
            <IonSegmentButton value='all' className='py-2' style={{ background: "transparent" }}>
              <IonLabel>All</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='homes'>
              <IonLabel>Homes</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='lands'>
              <IonLabel class='text-muted'>Lands</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </section>

        {/* ========================== images ===============================*/}
        <section className='ion-padding'>
          {
            renderPropertyCard()
          }
        </section>
      </IonContent>
    </IonPage >
  )
}

export default Search