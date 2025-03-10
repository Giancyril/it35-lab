import React, { useState, useRef } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonCardHeader,
  IonInputPasswordToggle,
  IonList,
  IonAvatar,
  IonInput,
  useIonRouter,
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';

const Register: React.FC = () => {
  const navigation = useIonRouter();

  
  const doRegister = () => {
    navigation.push("/it35-lab/app", "forward", "replace");
  };

  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  const [message, setMessage] = useState(
    'This modal example uses triggers to automatically open a modal when the button is clicked.'
  );

 
  function confirm() {
    modal.current?.dismiss(input.current?.value, 'confirm');
  }


  function onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      setMessage(`Hello, ${event.detail.data}!`);
    }
  }

  return (
   <IonPage>
         <IonHeader>
           <IonToolbar>
             <IonTitle>Register</IonTitle>
           </IonToolbar>
         </IonHeader>
   
         <IonContent className="ion-padding">
           <IonCard>
             <IonCardHeader>
               <IonCardTitle>Login</IonCardTitle>
             </IonCardHeader>
             <IonCardContent>
               <IonList>
                 <div
                   style={{
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     height: "100%",
                   }}
                 >
                   <IonAvatar>
                     <img
                       alt="Silhouette of a person's head"
                       src="https://ionicframework.com/docs/img/demos/avatar.svg"
                     />
                   </IonAvatar>
                 </div>
                 <IonItem>
                   <IonInput label="Username" placeholder="enter username"></IonInput>
                 </IonItem>
                 <IonItem>
                   <IonInput
                     type="password"
                     label="Password"
                     value="GianCyril1270"
                   >
                     <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
                   </IonInput>
                 </IonItem>
                
                 <IonButton onClick={() => doRegister()} expand="full">
                   Register
                 </IonButton>
               </IonList>
             </IonCardContent>
           </IonCard>
         </IonContent>
       </IonPage>
  );
};

export default Register;
