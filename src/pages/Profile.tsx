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

       
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', marginTop: '20px' }}>
          <IonAvatar style={{ width: '150px', height: '150px' }}>
            <img alt="Profile Avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
        </div>

    
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px',  }}>
          <h2>Gian Cyril</h2>
        </div>

      
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <p style={{ textAlign: 'center', width: '80%' }}>
            Currently focused on learning web and mobile app development
          </p>
        </div>

       
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '100px' }}>
          <IonChip style={{ fontSize: '14px', padding: '5px 10px' }}>
            <IonLabel>mijaresgiancyril@gmail.com</IonLabel>
          </IonChip>
        </div>

        <IonCard>
         <IonCardHeader>
         <IonCardTitle style={{ textAlign: 'center' }}>Github Projects</IonCardTitle>
         </IonCardHeader>
        </IonCard>
        
        <IonCard>
      <IonCardHeader>
        <IonCardTitle>Caesar Cipher</IonCardTitle>
        <IonCardSubtitle>html css js</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>https://github.com/Giancyril/Caesar-Cipher</IonCardContent>
    </IonCard>


    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Malware Blocker</IonCardTitle>
        <IonCardSubtitle>python</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>https://github.com/Giancyril/Anti-Malware-2</IonCardContent>
    </IonCard>

    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Sidebar Navigation</IonCardTitle>
        <IonCardSubtitle>html css</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>https://github.com/Giancyril/Anti-Malware-2</IonCardContent>
    </IonCard>


      </IonContent>
    </IonPage>
  );
};

export default Profile;
