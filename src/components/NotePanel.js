import firebase from "firebase/app";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { NoteCard } from "./NoteCard";

export const NotePanel = ({ uid }) => {
  const [notes] = useCollectionData(
    firebase.firestore().collection("users").doc(uid).collection("notes").orderBy("created", "desc"),
    { idField: "id" }
  );
  if (notes?.length > 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100 py-10 gap-4 sm:gap-6 lg:gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {notes.map((note) => (
          <NoteCard key={note.id} title={note.title} body={note.body} />
        ))}
      </div>
    );
  } else {
    return null;
  }
};
