import firebase from "firebase/app";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { Navbar } from "./components/Navbar";
import { ErrorPage } from "./components/ErrorPage";
import { NotePanel } from "./components/NotePanel";
import { CreateNoteDrawer } from "./components/CreateNoteDrawer";

export const App = () => {
  const [createDrawerOpen, setCreateDrawerOpen] = useState(true);
  const [user, userLoading, userError] = useAuthState(firebase.auth());
  useEffect(() => {
    if (!user && !userLoading) {
      firebase.auth().signInAnonymously();
    }
  }, [user, userLoading]);

  if (userError) return <ErrorPage errorMessage={userError.message} />;

  if (user) {
    return (
      <main className="bg-green-100 w-screen h-screen">
        <Navbar setDrawerOpen={setCreateDrawerOpen} />
        <NotePanel uid={user?.uid} />
        <CreateNoteDrawer
          open={createDrawerOpen}
          setOpen={setCreateDrawerOpen}
        />
      </main>
    );
  } else {
    return null;
  }
};
