import "./App.css";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

export const App = () => {
  const [user, userLoading, userError] = useAuthState(firebase.auth());
  useEffect(() => {
    if (!user || userLoading) {
      firebase.auth().signInAnonymously();
    }
  }, [user, userLoading]);

  return <div></div>;
};
