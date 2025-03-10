import React from "react";
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonInputPasswordToggle,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonThumbnail,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";

const Login: React.FC = () => {
  const navigation = useIonRouter();

  // Function to handle login
  const doLogin = () => {
    navigation.push("/it35-lab/app", "forward", "replace");
  };

  // Function to handle register
  const doRegister = () => {
    // You can change the path to wherever your registration page is located
    navigation.push("/it35-lab/register", "forward", "replace");
  };

  return (
    //HEADER
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
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
              <IonButton onClick={() => doLogin()} expand="full">
                Login
              </IonButton>
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

export default Login;
