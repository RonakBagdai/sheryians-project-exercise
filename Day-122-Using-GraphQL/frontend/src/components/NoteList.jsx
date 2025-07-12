import { format } from "date-fns";

export default function NoteList({ notes, onEdit, onDelete }) {
  if (!notes.length)
    return (
      <div className="text-gray-500 dark:text-gray-400 text-center italic">
        No notes yet. Start by adding one!
      </div>
    );

  return (
    <div className="grid gap-6" aria-label="Notes list">
      {notes.map((note) => (
        <article
          key={note.id}
          className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 border border-white/40 dark:border-gray-700 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition group"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition">
              {note.title}
            </h3>
            <div className="flex gap-2">
              <button
                type="button"
                className="text-purple-600 dark:text-purple-300 font-semibold hover:underline hover:text-purple-800 dark:hover:text-purple-400 transition"
                onClick={() => onEdit(note)}
                aria-label={`Edit note: ${note.title}`}
              >
                Edit
              </button>
              <button
                type="button"
                className="text-red-500 dark:text-red-400 font-semibold hover:underline hover:text-red-700 dark:hover:text-red-300 transition"
                onClick={() => onDelete(note.id)}
                aria-label={`Delete note: ${note.title}`}
              >
                Delete
              </button>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-200 mb-2">
            {note.content}
          </p>
          <div className="text-xs text-gray-400 dark:text-gray-500">
            Created: {format(new Date(note.createdAt), "PPpp")}
            {note.updatedAt && note.updatedAt !== note.createdAt && (
              <span className="ml-2">
                | Updated: {format(new Date(note.updatedAt), "PPpp")}
              </span>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
