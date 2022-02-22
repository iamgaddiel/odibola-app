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
import VerifyPhone from './pages/VerifyPhone';
import IndividualVerification from './pages/IndividualVerification';
import OrganizationVerification from './pages/OrganizationVerification';
import ChangePhoneNumber from './pages/ChangePhoneNumber';
import ScanNationalId from './pages/ScanNationalIDFront';


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
          <ScanNationalId />
        </Route>
        <Route exact path="/scan-back-national-id">
          <ScanNationalId />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
