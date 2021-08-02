import firebase from "firebase";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const placeholder = `# You can use markdown in this field.

### H3 Heading

*Italic*

**Bold**

etc etc.
`

export const CreateNoteForm = () => {
  const [user] = useAuthState(firebase.auth());
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  const createNote = (e) => {
    e.preventDefault();
    if (noteTitle && noteBody) {
      firebase
        .firestore()
        .collection("users")
        .doc(user?.uid)
        .collection("notes")
        .add({ title: noteTitle, body: noteBody, created: new Date() });
      setNoteTitle("");
      setNoteBody("");
    }
  }

  return (
    <form onSubmit={createNote} className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Note Title
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  value={noteTitle}
                  onChange={(e) => setNoteTitle(e.target.value)}
                  type="text"
                  name="noteTitle"
                  id="noteTitle"
                  className="flex-1 border focus:ring-green-500 focus:border-green-500 block w-full min-w-0 rounded-md p-1 sm:p-2 sm:text-lg border-gray-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700"
              >
                Note Body
              </label>
              <div className="mt-1">
                <textarea
                  value={noteBody}
                  onChange={(e) => setNoteBody(e.target.value)}
                  id="noteDody"
                  name="notebody"
                  rows={10}
                  className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full p-1 sm:p-2 sm:text-lg border border-gray-500 rounded-md"
                  defaultValue={""}
                  placeholder={placeholder}
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 p-4 w-full text-center text-2xl text-white bg-green-500"
            >
              Save Note
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
