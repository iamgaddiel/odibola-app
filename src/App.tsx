import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

// Global CSS
import './assets/css/global.css';
import Registration from './pages/Registration';

// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

// pages
import VerifyPhone from './pages/VerifyPhone';
import IndividualVerification from './pages/IndividualVerification';
import OrganizationVerification from './pages/OrganizationVerification';
import ChangePhoneNumber from './pages/ChangePhoneNumber';
import ScanNationalIDFront from './pages/ScanNationalIDFront';
import ScanNationalIDBack from './pages/ScanNationalIDBack';
import AccountVerified from './pages/AccountVerified';
import ContractOfSale from './pages/ContractOfSale';
import Routes from './components/Routes';
import HomePaymentOption from './pages/HomePaymentOption';
import HomePayWithBackTransfer from './pages/HomePayWithBackTransfer';
import HomeProofOfPayment from './pages/HomeProofOfPayment';
import HomeScheduleVisit from './pages/HomeScheduleVisit';
import HouseList from './pages/HouseList';
import LandAcceptedOffer from './pages/LandAcceptedOffer';
import LandDetail from './pages/LandDetail';
import LandEnquiryForm from './pages/LandEnquiryForm';
import LandList from './pages/LandList';
import LandOffer from './pages/LandOffer';
import LandPurchase from './pages/LandPurchase';
import LandSchedule from './pages/LandSchedule';
import LandVisitDecision from './pages/LandVisitDecision';
import PropertyDetail from './pages/PropertyDetail';
import Search from './pages/Search';
import SearchResult from './pages/SearchResult';
import Onboarding from './pages/Onboarding';
import Favorite from './pages/Favorites';
import Updates from './pages/Updates';

// ionic icons
import { homeOutline, search, heart, barbellOutline, notificationsOutline } from 'ionicons/icons';


setupIonicReact();

// todo: finish search result screen
// todo: finish

const App: React.FC = () => (
  <IonApp>

    <IonReactRouter>
      <IonPage>
        <IonTabs>
          
          <IonRouterOutlet>
            <Route exact path="/onboarding" component={Onboarding} />
            <Route exact path='/search-result' component={SearchResult} />

            {/* tabs */}
            <Redirect exact from='/' to='/home' />
            <Route exact path='/home' component={Home} />
            <Route exact path='/updates' component={Updates} />
            <Route exact path='/search' component={Search} />
            <Route exact path="/favorites" component={Favorite} />


            {/* verification pages */}
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/verify-phone" component={VerifyPhone} />
            <Route exact path="/individual-verification" component={IndividualVerification} />
            <Route exact path="/organization-verification" component={OrganizationVerification} />
            <Route exact path="/change-number" component={ChangePhoneNumber} />
            <Route exact path="/scan-front-national-id" component={ScanNationalIDFront} />
            <Route exact path="/scan-back-national-id" component={ScanNationalIDBack} />
            <Route exact path="/verification-success" component={AccountVerified} />
            <Route exact path="/contract-of-sale" component={ContractOfSale} />

            {/* homes */}
            <Route exact path="/homes" component={HouseList} />
            <Route exact path="/property-detail" component={PropertyDetail} />
            <Route exact path="/schedule-home" component={HomeScheduleVisit} />
            <Route exact path="/home-payment-option" component={HomePaymentOption} />
            <Route exact path="/home-bank-transfer" component={HomePayWithBackTransfer} />
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

          <IonTabBar
            slot='bottom'
            translucent
            className='ion-padding-vertical blue-text'>
              
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

            <IonTabButton tab='update' href='/updates'>
              <IonIcon icon={notificationsOutline} />
              <IonLabel>Updates</IonLabel>
            </IonTabButton>
          </IonTabBar>

        </IonTabs>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);

export default App;
