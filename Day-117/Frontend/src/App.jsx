import React, { useEffect, useState } from "react";
import { GraphQLClient, gql } from "graphql-request";

const endpoint = "http://localhost:3000/graphql";
const client = new GraphQLClient(endpoint);

function App() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });
  const [editing, setEditing] = useState(null);

  const fetchNotes = async () => {
    const query = gql`
      {
        notes {
          _id
          title
          description
        }
      }
    `;
    const data = await client.request(query);
    setNotes(data.notes);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      const mutation = gql`
        mutation ($id: ID!, $title: String, $description: String) {
          updateNote(id: $id, title: $title, description: $description) {
            _id
          }
        }
      `;
      await client.request(mutation, { id: editing, ...form });
      setEditing(null);
    } else {
      const mutation = gql`
        mutation ($title: String!, $description: String!) {
          addNote(title: $title, description: $description) {
            _id
          }
        }
      `;
      await client.request(mutation, form);
    }
    setForm({ title: "", description: "" });
    fetchNotes();
  };

  const handleDelete = async (id) => {
    const mutation = gql`
      mutation ($id: ID!) {
        deleteNote(id: $id) {
          _id
        }
      }
    `;
    await client.request(mutation, { id });
    fetchNotes();
  };

  const handleEdit = (note) => {
    setForm({ title: note.title, description: note.description });
    setEditing(note._id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          Notes
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
          <textarea
            className="w-full h-40 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
            rows={3}
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition"
            >
              {editing ? "Update" : "Add"} Note
            </button>
            {editing && (
              <button
                type="button"
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 rounded-lg transition"
                onClick={() => {
                  setEditing(null);
                  setForm({ title: "", description: "" });
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
        <ul className="space-y-4 max-h-115 overflow-y-auto pr-2">
          {notes.map((note) => (
            <li
              key={note._id}
              className="bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 rounded-lg p-4 shadow flex flex-col gap-2"
            >
              <div>
                <strong className="text-lg text-purple-800">
                  {note.title}
                </strong>
                <p className="text-gray-700">{note.description}</p>
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleEdit(note)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(note._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
