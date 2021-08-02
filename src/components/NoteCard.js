import ReactMarkdown from "react-markdown";

export const NoteCard = ({ title, body }) => {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        <ReactMarkdown className="prose mt-5">{body}</ReactMarkdown>
      </div>
    </div>
  );
};
