import { NoteCard } from "./NoteCard";

const body = `#### Test

*lol*`
export const NotePanel = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <NoteCard title="Fritz Note #1" body={body}  />
    </div>
  );
};
