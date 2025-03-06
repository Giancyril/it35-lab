import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonChip, 
  IonAvatar, 
  IonLabel, 
  IonButton 
} from '@ionic/react';
import React from 'react';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        {/* Avatar Section */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', marginTop: '20px' }}>
          <IonAvatar style={{ width: '150px', height: '150px' }}>
            <img alt="Profile Avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
        </div>

        {/* Name Section */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px',  }}>
          <h2>Gian Cyril</h2>
        </div>

        {/* Bio Section */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <p style={{ textAlign: 'center', width: '80%' }}>
            Currently focused on learning web and mobile app development. Eager to explore new technologies and improve skills through hands-on projects.
          </p>
        </div>

        {/* Contact Info Section */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '100px' }}>
          <IonChip style={{ fontSize: '14px', padding: '5px 10px' }}>
            <IonLabel>Email: mijaresgiancyril@gmail.com</IonLabel>
          </IonChip>
        </div>


        {/* Card Section */}
        <IonCard>
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          <IonCardHeader>
            <IonCardTitle>Caesar Cipher</IonCardTitle>
            <IonCardSubtitle>HTML, CSS, JS language</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>https://github.com/Giancyril/Caesar-Cipher</IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Profile;
