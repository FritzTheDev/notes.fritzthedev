import { useEffect } from "react";
import firebase from "firebase/app";
import { useAuthState } from "react-firebase-hooks/auth";

import { ErrorPage } from "./components/ErrorPage";
import CreateNoteDrawer from "./components/CreateNoteDrawer";

export const App = () => {
  const [user, userLoading, userError] = useAuthState(firebase.auth());
  useEffect(() => {
    if (!user && !userLoading) {
      firebase.auth().signInAnonymously();
    }
  }, [user, userLoading]);

  if (userError) return <ErrorPage errorMessage={userError.message} />;

  return <main className="bg-green-100 w-screen h-screen">
    <CreateNoteDrawer />
  </main>;
};
