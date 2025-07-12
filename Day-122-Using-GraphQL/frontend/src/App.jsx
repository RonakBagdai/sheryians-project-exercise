import { useQuery, useMutation, gql } from "@apollo/client";
import { useState, useCallback } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import ThemeToggle from "./components/ThemeToggle";

const GET_NOTES = gql`
  query {
    getNotes {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;

const CREATE_NOTE = gql`
  mutation ($title: String!, $content: String!) {
    createNote(title: $title, content: $content) {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;

const UPDATE_NOTE = gql`
  mutation ($id: ID!, $title: String, $content: String) {
    updateNote(id: $id, title: $title, content: $content) {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;

const DELETE_NOTE = gql`
  mutation ($id: ID!) {
    deleteNote(id: $id)
  }
`;

export default function App() {
  const { data, loading, error, refetch } = useQuery(GET_NOTES);
  const [createNote] = useMutation(CREATE_NOTE);
  const [updateNote] = useMutation(UPDATE_NOTE);
  const [deleteNote] = useMutation(DELETE_NOTE);
  const [editingNote, setEditingNote] = useState(null);

  const handleSave = useCallback(
    async ({ title, content, id }) => {
      try {
        if (id) {
          await updateNote({ variables: { id, title, content } });
          setEditingNote(null);
        } else {
          await createNote({ variables: { title, content } });
        }
        refetch();
      } catch (err) {
        // Optionally handle error (e.g., show toast)
        console.error("Error saving note:", err);
      }
    },
    [createNote, updateNote, refetch]
  );

  const handleEdit = useCallback((note) => setEditingNote(note), []);

  const handleDelete = useCallback(
    async (id) => {
      try {
        await deleteNote({ variables: { id } });
        refetch();
      } catch (err) {
        // Optionally handle error (e.g., show toast)
        console.error("Error deleting note:", err);
      }
    },
    [deleteNote, refetch]
  );

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return (
      <div className="text-center mt-10 text-red-500">Error loading notes.</div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center py-10 relative">
      <ThemeToggle />
      <div className="w-full max-w-2xl">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-300 dark:via-purple-300 dark:to-pink-300 text-center mb-10 drop-shadow-lg">
          Notes App
        </h1>
        <div className="backdrop-blur-md bg-white/60 dark:bg-gray-900/60 rounded-2xl shadow-2xl p-8 mb-10 border border-white/40 dark:border-gray-700">
          <NoteForm
            onSave={handleSave}
            editingNote={editingNote}
            onCancel={() => setEditingNote(null)}
          />
        </div>
        <div className="space-y-6">
          <NoteList
            notes={data.getNotes}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
