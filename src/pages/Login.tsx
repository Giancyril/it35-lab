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
import { eye, eyeOff } from "ionicons/icons";
import { useState } from "react";

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isTouchedEmail, setIsTouchedEmail] = useState(false);
  const [isTouchedPassword, setIsTouchedPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean | undefined>();
  const [isPasswordValid, setIsPasswordValid] = useState<boolean | undefined>();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  
  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const validateEmailInput = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    setEmail(value);
    setIsEmailValid(undefined);

    if (value === "") return;
    validateEmail(value) !== null ? setIsEmailValid(true) : setIsEmailValid(false);
  };

  const validatePasswordInput = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    setPassword(value);
    setIsPasswordValid(undefined);

    if (value === "") return;
    validatePassword(value) ? setIsPasswordValid(true) : setIsPasswordValid(false);
  };

  const markEmailTouched = () => setIsTouchedEmail(true);
  const markPasswordTouched = () => setIsTouchedPassword(true);

  const doSignup = () => {
    navigation.push("/it35-lab/signup", "forward", "replace");
  };

  const doLogin = () => {
    if (email === "dev@gmail.com" && password === "dev123") {
      navigation.push("/it35-lab/app", "forward", "replace");
    }
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

           
              <IonItem>
                <IonInput
                  className={`${isEmailValid ? "ion-valid" : ""} ${
                    isEmailValid === false ? "ion-invalid" : ""
                  } ${isTouchedEmail ? "ion-touched" : ""}`}
                  type="email"
                  fill="solid"
                  label="Email"
                  labelPlacement="floating"
                  helperText="Enter a valid email"
                  errorText="Invalid email"
                  onIonInput={(event) => validateEmailInput(event)}
                  onIonBlur={markEmailTouched}
                />
              </IonItem>
              
              <IonItem style={{ marginTop: 5 }}>
              <IonInput
                className={`${isPasswordValid ? "ion-valid" : ""} ${
                isPasswordValid === false ? "ion-invalid" : ""
                } ${isTouchedPassword ? "ion-touched" : ""}`}
                type={showPassword ? "text" : "password"} 
                fill="solid"
                label="Password"
                labelPlacement="floating"
                errorText="Password too short"
                onIonInput={(event) => validatePasswordInput(event)}
                onIonBlur={markPasswordTouched}
              />
             <IonButton
                fill="clear"
               slot="end"
               onClick={() => setShowPassword(!showPassword)}>
              <IonIcon icon={showPassword ? eyeOff : eye} />
              </IonButton>
              </IonItem>;

              <IonButton onClick={doLogin} expand="full" style={{ marginTop: 20 }}>
                Login
              </IonButton>
              <IonButton onClick={doSignup} expand="full" style={{ marginTop: 10 }}>
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
