import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import OnboardingSlides from '../components/OnboardingSlides';
import '../assets/css/Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <OnboardingSlides />
      </IonContent>
    </IonPage>
  );
};

export default Home;
