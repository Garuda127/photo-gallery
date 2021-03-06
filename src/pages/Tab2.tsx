import { camera, trash, close } from 'ionicons/icons';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
} from '@ionic/react';

 
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { usePhotoGallery } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
  const { takePhoto } = usePhotoGallery();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
 <IonFab vertical="bottom" horizontal="center" slot="fixed">
   <IonFabButton onClick={() => takePhoto()}>
     <IonIcon icon={camera}></IonIcon>
   </IonFabButton>
 </IonFab>
</IonContent>

        <ExploreContainer name="Tab 2 page" />
        
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
