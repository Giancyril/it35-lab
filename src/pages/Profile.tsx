import { 
    IonButtons,
      IonContent, 
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
  import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

  const Profile: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <IonCard>
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Profile;