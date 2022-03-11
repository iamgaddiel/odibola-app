import {
  IonIcon,
  IonHeader,
  IonToolbar,
  IonRouterLink,
  IonImg,
  IonContent,
  IonSlides,
  IonSlide,
  IonCard,
  IonCardContent,
  IonButtons,
  IonButton,
  IonPage
} from '@ionic/react'
import { menuSharp, carOutline } from 'ionicons/icons'


// images
import Home1 from '../assets/svgs/home-1.svg'
import Home2 from '../assets/svgs/home-2.svg'
import Land1 from '../assets/svgs/land-1.svg'

// css
import '../assets/css/app.css'

const Dashboard = () => {

  // slides options
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 10,
    effect: 'slide',
  };

  return (
    <>

      <IonHeader color='default' className={`px-4 ion-no-border light-bg`}>
        <IonToolbar color='default'>
          <IonButtons className='d-flex justify-content-between'>
            <IonButton>
              <IonIcon icon={menuSharp} color='dark' />
            </IonButton>
            <div className="logo"></div>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className='ion-padding'>
        <header className='ion-padding'>
          <h1 className='heading-text h1 bold'>Welcome Bolaji</h1>
          <h3 className='lead-text'>Let's find your dream property</h3>
        </header>

        <main>

          {/* home preview */}
          <section className="home-preview mt-5">
            <div className="d-flex justify-content-between ion-padding">
              <h2 className="heading-text bold">Home</h2>
              <h5>
                <IonRouterLink routerDirection='forward' routerLink='/homes'>View all</IonRouterLink>
              </h5>
            </div>

            <section>
              <IonSlides options={slideOpts}>
                <IonSlide>
                  <IonCard>
                    <div className="card-image">
                      <IonImg src={Home1} alt='' />
                    </div>
                    <IonCardContent>
                      <section className="card-details text-left">
                        <h1 className="bold text-left">N98,000,000</h1>
                        <h3 className="lead-text">3 Bed Room </h3>
                      </section>

                      <section className="card-icons d-flex justify-content-between mt-2">
                        <IonRouterLink slot='start' color='dark'>
                          <IonIcon icon={carOutline} size='large ' />
                          <span className="mx-1 lead-text">2</span>
                        </IonRouterLink>
                        <IonRouterLink slot='start' color='dark'>
                          {/* <FontAwesomeIcon icon={'user-secret'} /> */}
                          <IonIcon icon={carOutline} size='large' />
                          <span className="mx-1 lead-text">2</span>
                        </IonRouterLink>
                        <IonRouterLink slot='start' color='dark'>
                          <IonIcon icon={carOutline} size='large' />
                          <span className="mx-1 lead-text">1560 sqft</span>
                        </IonRouterLink>
                      </section>
                    </IonCardContent>
                  </IonCard>
                </IonSlide>

                <IonSlide>
                  <IonCard>
                    <div className="card-image">
                      <IonImg src={Home2} alt='' />
                    </div>
                    <IonCardContent>
                      <section className="card-details text-left">
                        <h1 className="bold text-left">N98,000,000</h1>
                        <h3 className="lead-text">3 Bed Room </h3>
                      </section>

                      <section className="card-icons d-flex justify-content-between mt-2">
                        <IonRouterLink slot='start' color='dark'>
                          <IonIcon icon={carOutline} size='large ' />
                          <span className="mx-1 lead-text">2</span>
                        </IonRouterLink>
                        <IonRouterLink slot='start' color='dark'>
                          {/* <FontAwesomeIcon icon={'user-secret'} /> */}
                          <IonIcon icon={carOutline} size='large' />
                          <span className="mx-1 lead-text">2</span>
                        </IonRouterLink>
                        <IonRouterLink slot='start' color='dark'>
                          <IonIcon icon={carOutline} size='large' />
                          <span className="mx-1 lead-text">1560 sqft</span>
                        </IonRouterLink>
                      </section>
                    </IonCardContent>
                  </IonCard>
                </IonSlide>


              </IonSlides>
            </section>
          </section>


          {/* ================================ land preview =================*/}
          <section className="land-preview mt-5">
            <div className="d-flex justify-content-between ion-padding">
              <h2 className="heading-text bold">Land</h2>
              <h5>
                <IonRouterLink routerDirection='forward' routerLink='/lands'>View all</IonRouterLink>
              </h5>
            </div>

            <section>
              <IonSlides options={slideOpts}>

                <IonSlide>
                  <IonCard className='d-flex justify-content-between'>
                    <IonCardContent className='d-flex'>

                      <div className="card-image-sm">
                        <IonImg src={Land1} alt='' />
                      </div>

                      <section className="card-details mx-3">
                        <h2 className="bold">Condominium and Lake</h2>
                        <p className="lead-text mt-3">19, St. Adeola Odeku,
                          Lekki, Lagos. </p>
                        <h3 className="bold mt-3">130,000,000</h3>
                      </section>
                    </IonCardContent>
                  </IonCard>
                </IonSlide>

                <IonSlide>
                  <IonCard className='d-flex justify-content-between'>
                    <IonCardContent className='d-flex'>

                      <div className="card-image-sm">
                        <IonImg src={Land1} alt='' />
                      </div>

                      <section className="card-details mx-3">
                        <h2 className="bold">Condominium and Lake</h2>
                        <p className="lead-text mt-3">19, St. Adeola Odeku,
                          Lekki, Lagos. </p>
                        <h3 className="bold mt-3">130,000,000</h3>
                      </section>
                    </IonCardContent>
                  </IonCard>
                </IonSlide>

              </IonSlides>
            </section>
          </section>


          {/* ================================ news preview =================*/}
          <section className="news-preview mt-5">
            <div className="d-flex justify-content-between ion-padding">
              <h2 className="heading-text bold">News</h2>
              <h5>
                <IonRouterLink routerDirection='forward' routerLink='/'>View all</IonRouterLink>
              </h5>
            </div>

            <section>

              <section className='d-flex'>

                <div className="card-image-sm">
                  <IonImg src={Land1} alt='' />
                </div>

                <section className="card-details mx-3">
                  <h2 className="bold">Condominium and Lake</h2>
                  <p className="lead-text mt-3">19, St. Adeola Odeku,
                    Lekki, Lagos. </p>
                  <h3 className="bold mt-3">130,000,000</h3>
                </section>
              </section>

            </section>
          </section>
        </main>
      </IonContent>
    </>
  )
}

export default Dashboard