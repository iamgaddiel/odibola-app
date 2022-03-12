import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

// icons
import { homeOutline, search, heart, barbellOutline } from 'ionicons/icons'

// tabs components
import Home from '../pages/Home'
import HomePaymentOption from '../pages/HomePaymentOption'
import HomePayWithBackTransfer from '../pages/HomePayWithBackTransfer'
import HomeProofOfPayment from '../pages/HomeProofOfPayment'
import HomeScheduleVisit from '../pages/HomeScheduleVisit'
import HouseList from '../pages/HouseList'
import LandAcceptedOffer from '../pages/LandAcceptedOffer'
import LandDetail from '../pages/LandDetail'
import LandEnquiryForm from '../pages/LandEnquiryForm'
import LandList from '../pages/LandList'
import LandOffer from '../pages/LandOffer'
import LandPurchase from '../pages/LandPurchase'
import LandSchedule from '../pages/LandSchedule'
import LandVisitDecision from '../pages/LandVisitDecision'
import PropertyDetail from '../pages/PropertyDetail'
import Search from '../pages/Search'
import SearchResult from '../pages/SearchResult'



const Routes: React.FC = () => {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>

                    {/* Routes */}
                    {/* <Route path='/' render={() => <Redirect from='/' to='/home' />} /> */}
                    <Route path='/:tab(home)' component={Home} exact/>
                    <Route path='/:tab(search)' component={Search} exact/>
                    <Route path='/:tab(search-result)' component={SearchResult} exact/>

                    {/* homes */}
                    <Route exact path="/homes" component={HouseList} />
                    <Route exact path="/property-detail" component={PropertyDetail}/>
                    <Route exact path="/schedule-home" component={HomeScheduleVisit}/>
                    <Route exact path="/home-payment-option" component={HomePaymentOption}/>
                    <Route exact path="/home-bank-transfer" component={HomePayWithBackTransfer}/>
                    <Route exact path="/home-proof-of-payment" component={HomeProofOfPayment} />

                    {/* lands */}
                    <Route exact path="/lands" component={LandList} />
                    <Route exact path="/land-detail" component={LandDetail} />
                    <Route exact path="/land-schedule-verification" component={LandVisitDecision} />
                    <Route exact path="/schedule-land" component={LandSchedule} />
                    <Route exact path="/land-enquire" component={LandEnquiryForm} />
                    <Route exact path="/land-purchase" component={LandPurchase} />
                    <Route exact path="/land-offer" component={LandOffer} />
                    <Route exact path="/land-accepted-offer" component={LandAcceptedOffer} />
                </IonRouterOutlet>

                <IonTabBar slot='bottom' translucent className='ion-padding-vertical'>
                    <IonTabButton tab='home' href='/home'>
                        <IonIcon icon={homeOutline} />
                        <IonLabel>Home</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab='search' href='/search'>
                        <IonIcon icon={search} />
                        <IonLabel>Search</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab='favorites' href='/favorites'>
                        <IonIcon icon={heart} />
                        <IonLabel>Favorites</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab='update' href='/update'>
                        <IonIcon icon={barbellOutline} />
                        <IonLabel>Notification</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    )
}

export default Routes