import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
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
import AuthPage from './pages/AuthPage';
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
import Dashboard from './pages/Dashboard';
import LandList from './pages/LandList';
import HouseList from './pages/HouseList';
import PropertyDetail from './pages/PropertyDetail';
import HomeScheduleVisit from './pages/HomeScheduleVisit';
import LandDetail from './pages/LandDetail';
import LandVisitDecision from './pages/LandVisitDecision';
import LandSchedule from './pages/LandSchedule';
import LandEnquiryForm from './pages/LandEnquiryForm';
import HomePaymentOption from './pages/HomePaymentOption';
import HomePayWithBackTransfer from './pages/HomePayWithBackTransfer';
import HomeProofOfPayment from './pages/HomeProofOfPayment';
import ContractOfSale from './pages/ContractOfSale';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>

        {/* verification pages */}
        <Route exact path="/verify-phone">
          <VerifyPhone />
        </Route>
        <Route exact path="/individual-verification">
          <IndividualVerification />
        </Route>
        <Route exact path="/organization-verification">
          <OrganizationVerification />
        </Route>
        <Route exact path="/change-number">
          <ChangePhoneNumber />
        </Route>
        <Route exact path="/scan-front-national-id">
          <ScanNationalIDFront />
        </Route>
        <Route exact path="/scan-back-national-id">
          <ScanNationalIDBack />
        </Route>
        <Route exact path="/verification-success">
          <AccountVerified />
        </Route>
        <Route exact path="/contract-of-sale">
          <ContractOfSale />
        </Route>

        {/* main app */}
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>

        {/* homes */}
        <Route exact path="/homes">
          <HouseList />
        </Route>
        <Route exact path="/property-detail">
          <PropertyDetail />
        </Route>
        <Route exact path="/schedule-home">
          <HomeScheduleVisit />
        </Route>
        <Route exact path="/home-payment-option">
          <HomePaymentOption />
        </Route>
        <Route exact path="/home-bank-transfer">
          <HomePayWithBackTransfer />
        </Route>
        <Route exact path="/home-proof-of-payment">
          <HomeProofOfPayment />
        </Route>

        {/* lands */}
        <Route exact path="/lands">
          <LandList />
        </Route>
        <Route exact path="/land-detail">
          <LandDetail />
        </Route>
        <Route exact path="/land-schedule-verification">
          <LandVisitDecision />
        </Route>
        <Route exact path="/schedule-land">
          <LandSchedule />
        </Route>
        <Route exact path="/land-enquire">
          <LandEnquiryForm />
        </Route>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
   