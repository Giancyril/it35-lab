import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonInputPasswordToggle,
  IonItem,
  IonList,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { useState } from "react";

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const doLogin = () => {
    navigation.push("/it35-lab/app", "forward", "replace");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          
          <IonCardContent>
            <IonList>
              
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
                <IonAvatar style={{ width: 80, height: 80 }}>
                  <img
                    alt="User Avatar"
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  />
                </IonAvatar>
              </div>

           
              <IonInput
                     label="Email" 
                     labelPlacement="floating" 
                     fill="outline"
                     type="email"
                     placeholder="Enter Email"
                     value={email}
                     onIonChange={e => setEmail(e.detail.value!)}
                   />
                   <IonInput style={{
                       marginTop:'10px',
                     }}      
                     fill="outline"
                     type="password"
                     placeholder="Password"
                     value={password}
                     onIonChange={e => setPassword(e.detail.value!)}
                   ><IonInputPasswordToggle slot="end"></IonInputPasswordToggle></IonInput>


              <IonButton onClick={() => doLogin()} expand="full" style={{ marginTop: 10 }} shape="round">
                 Login
             </IonButton>
              <IonButton routerLink="/it35-lab/signup" expand="full" style={{ marginTop: 10 }} shape="round">
               Signup
              </IonButton>

            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
