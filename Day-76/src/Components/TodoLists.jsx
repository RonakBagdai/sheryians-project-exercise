import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { useContext } from "react";
import { todocontext } from "../Wrapper";

const TodoList = () => {
  const [todos, setTodos] = useContext(todocontext);

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const deleteHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);

    toast.error("Todo deleted successfully");
  };

  const deleteAllHandler = () => {
    setTodos([]);
    toast.error("All todos deleted successfully");
  };

  const toggleComplete = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  const handleEdit = (id, title) => {
    setEditId(id);
    setEditTitle(title);
  };

  const saveEdit = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, title: editTitle } : todo
    );
    setTodos(updated);
    setEditId(null);
    setEditTitle("");
  };

  const renderList = (
    <AnimatePresence>
      {todos.map((todo) => {
        const isEditing = editId === todo.id;

        return (
          <motion.li
            key={todo.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="mb-2 flex justify-between items-center p-4 bg-gray-900 rounded"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={todo.completed || false}
                onChange={() => toggleComplete(todo.id)}
              />
              {isEditing ? (
                <input
                  className="bg-gray-800 text-white px-2 py-1 rounded outline-none"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  onBlur={() => saveEdit(todo.id)}
                  autoFocus
                />
              ) : (
                <span
                  className={`text-xl font-thin ${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                  onDoubleClick={() => handleEdit(todo.id, todo.title)}
                >
                  {todo.title}
                </span>
              )}
            </div>
            <button
              className="text-sm font-thin text-red-400 hover:underline"
              onClick={() => deleteHandler(todo.id)}
            >
              Delete
            </button>
          </motion.li>
        );
      })}
    </AnimatePresence>
  );

  return (
    <div className="w-[50%] p-10 flex flex-col items-center">
      <h1 className="mb-6 text-5xl font-thin">
        <span className="text-pink-400">Pending</span> Todos
      </h1>

      {todos.length > 0 && (
        <button
          onClick={deleteAllHandler}
          className="mb-6 px-4 py-2 text-sm font-thin text-white bg-red-500 rounded hover:bg-red-600 transition"
        >
          Delete All
        </button>
      )}

      <ol className="w-[400px]">{renderList}</ol>

      {todos.length === 0 && (
        <p className="text-2xl font-thin text-left mt-10">
          ---No Todos to show---
        </p>
      )}
    </div>
  );
};

export default TodoList;
