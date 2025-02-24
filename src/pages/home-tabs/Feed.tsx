import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
       
      <IonCard>
      <IonCardHeader>
        <IonCardTitle>IT35</IonCardTitle>
        <IonCardSubtitle>Application Development and Emergein Tech</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Units: 3</IonCardContent>

      <IonButton fill="clear">SHOW DETAILS</IonButton>
    
    </IonCard>

    <IonCard>
      <IonCardHeader>
        <IonCardTitle>IT38</IonCardTitle>
        <IonCardSubtitle>Enterprise Systems</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Unit: 3</IonCardContent>

      <IonButton fill="clear">Show Details</IonButton>
      
    </IonCard>


      </IonContent>
    </IonPage>
  );
};
export default Feed;