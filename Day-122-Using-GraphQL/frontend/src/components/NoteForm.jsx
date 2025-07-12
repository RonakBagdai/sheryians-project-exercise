import { useState, useEffect } from "react";

export default function NoteForm({ onSave, editingNote, onCancel }) {
  const [title, setTitle] = useState(() => editingNote?.title || "");
  const [content, setContent] = useState(() => editingNote?.content || "");

  useEffect(() => {
    setTitle(editingNote?.title || "");
    setContent(editingNote?.content || "");
  }, [editingNote]);

  const isDisabled = !title.trim() || !content.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDisabled) return;
    onSave({ title, content, id: editingNote?.id });
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
        {editingNote ? "Edit Note" : "Add Note"}
      </h2>
      <input
        className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 transition"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        autoFocus
        aria-label="Note title"
      />
      <textarea
        className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-600 bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 transition"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        aria-label="Note content"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:scale-105 hover:from-blue-600 hover:to-pink-600 transition"
          disabled={isDisabled}
        >
          {editingNote ? "Update" : "Create"}
        </button>
        {editingNote && (
          <button
            type="button"
            className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
