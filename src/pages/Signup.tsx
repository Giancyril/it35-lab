import React, { useState } from 'react';
 import {
     IonButton,
     IonContent,
     IonHeader,
     IonInput,
     IonInputPasswordToggle,
     IonPage,
     IonTitle,
     IonToolbar,
     IonModal,
     IonText,
     IonItem,
     IonLabel,
     IonCard,
     IonCardContent,
     IonCardHeader,
     IonCardSubtitle,
     IonCardTitle,
     IonAvatar,
 } from '@ionic/react';
 
 const Signup: React.FC = () => {
     const [username, setUsername] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');
     const [showVerificationModal, setShowVerificationModal] = useState(false);
     const [showSuccessModal, setShowSuccessModal] = useState(false);
 
     const handleOpenVerificationModal = () => {
  
         setShowVerificationModal(true);
     };
 
      const doRegister = async () => {
         
         setShowVerificationModal(false);
         
         setShowSuccessModal(true);
     };
 
     return (
         <IonPage>
             
             <IonContent className='ion-padding'>
                 <h1>Create your account</h1>
                
                 <IonInput
                     style={{
                         marginTop:'20px',
                     }}
                     label="Username" 
                     labelPlacement="stacked"
                     fill="outline"
                     type="text"
                     placeholder="Enter your username"
                     value={username}
                     onIonChange={e => setUsername(e.detail.value!)}
                 />
                 <IonInput
                     style={{
                         marginTop:'15px',
                     }}
                     label="Email" 
                     labelPlacement="stacked" 
                     fill="outline"
                     type="email"
                     placeholder="Enter your email"
                     value={email}
                     onIonChange={e => setEmail(e.detail.value!)}
                 />
                 <IonInput
                     style={{
                         marginTop:'15px',
                     }}
                     label="Password" 
                     labelPlacement="stacked"
                     fill="outline"
                     type="password"
                     placeholder="Password"
                     value={password}
                     onIonChange={e => setPassword(e.detail.value!)}
                 >
                 <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
                 </IonInput>
                 <IonInput
                     style={{
                         marginTop:'15px',
                     }}
                     label="Confirm Password" 
                     labelPlacement="stacked"
                     fill="outline"
                     type="password"
                     placeholder="Confirm Password"
                     value={confirmPassword}
                     onIonChange={e => setConfirmPassword(e.detail.value!)}
                 >
                     <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
                 </IonInput>
                 <IonButton
                     style={{
                         marginTop:'15px',
                     }} 
                     onClick={handleOpenVerificationModal} expand="full" shape='round'>
                     Register
                 </IonButton>
                 <IonButton routerLink="/it35-lab" expand="full" fill="clear" shape='round'>
                   Already have an account? Sign in
                 </IonButton>
 
                 
                 <IonModal isOpen={showVerificationModal} onDidDismiss={() => setShowVerificationModal(false)}>
                     <IonToolbar className="ion-text-center" color="primary">
                         <IonTitle>Confirm Registration</IonTitle>
                     </IonToolbar>
                     <IonContent className="ion-padding">
                        
                          <IonCard style={{
                             marginTop:'5%'
                             }}
                             className="ion-padding">
                             <IonCardHeader>
                                 <IonCardTitle><h2>User Registration Details</h2></IonCardTitle>
                                 <hr></hr>
 
                                 <IonCardSubtitle>Username</IonCardSubtitle>
                                 <IonCardTitle>{username}</IonCardTitle>
 
                                 <IonCardSubtitle>Email</IonCardSubtitle>
                                 <IonCardTitle>{email}</IonCardTitle>
 
                             </IonCardHeader>
        
                             <div style={{
                                 display:'flex',
                                 justifyContent:'flex-end',
                                 marginRight:'5px',
                             }}>
                                 <IonButton 
                                     fill="clear"
                                     onClick={() => setShowVerificationModal(false)}
                                 >Cancel</IonButton>
 
                                 <IonButton
                                     className='ion-text-white'
                                     color="primary"
                                     onClick={doRegister} 
                                 >Confirm
                                 </IonButton>
                             </div> 
 
                         </IonCard>
                        
                     </IonContent>
                 </IonModal>
 
                 
                 <IonModal isOpen={showSuccessModal} onDidDismiss={() => setShowSuccessModal(false)}  color="primary">
                     <IonContent className="ion-padding" style={{
                         display: 'flex',
                         flexDirection: 'column',
                         justifyContent: 'center',
                         alignItems: 'center',
                         height: '100vh',
                         textAlign: 'center',
                         marginTop:'30%'
                     }}>
                         <IonTitle style={{
                             marginTop:'35%'
                         }}>Registration Successful</IonTitle>
                         <IonText>
                             <p>Your account has been successfully created.</p>
                             <p>Check your email for further instructions.</p>
                         </IonText>
                         <IonButton routerLink="/it35-lab" routerDirection="back" color="primary">
                             Go to Login
                         </IonButton>
                     </IonContent>
                 </IonModal>
             </IonContent>
         </IonPage>
     );
 };

 export default Signup;