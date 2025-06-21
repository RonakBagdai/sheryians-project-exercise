import { Fragment, useState } from "react";
import CreateTodo from "./Components/Create";
import TodoList from "./Components/TodoLists";

const App = () => {
  // const [completed, setcompleted] = useState(false);
  // const [gender, setgender] = useState("female");
  // const [city, setcity] = useState("delhi");

  return (
    <div className="text-white flex w-screen h-screen bg-gray-800 p-10">
      <CreateTodo></CreateTodo>
      <TodoList></TodoList>
    </div>
  );
};

export default App;

{
  /* <input
  checked={completed}
  onChange={(e) => setcompleted(e.target.checked)}
  type="checkbox"
/>{" "}
Completed
<br />
<br /> */
}
{
  /* <input
  value="male"
  onChange={(e) => setgender(e.target.value)}
  checked={gender === "male" ? true : false}
  type="radio"
/>
male
<input
  value="female"
  onChange={(e) => setgender(e.target.value)}
  checked={gender === "female" ? true : false}
  type="radio"
/>
female
<br />
<br /> */
}
{
  /* <select value={city} onChange={(e) => setcity(e.target.value)}>
  <option value="delhi">Delhi</option>
  <option value="mumbai">Mumbai</option>
  <option value="kolkata">Kolkata</option>
</select>
<br />
<br /> */
}

// import React, { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [selectedDate, setSelectedDate] = useState(getToday());
//   const [task, setTask] = useState("");
//   const [todos, setTodos] = useState(() => {
//     const saved = localStorage.getItem("todos");
//     return saved ? JSON.parse(saved) : {};
//   });

//   function getToday() {
//     const today = new Date();
//     return today.toISOString().split("T")[0];
//   }

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   const handleAddTask = () => {
//     if (!task.trim()) return;
//     setTodos((prev) => {
//       const updated = { ...prev };
//       updated[selectedDate] = [
//         ...(updated[selectedDate] || []),
//         { text: task, done: false },
//       ];
//       return updated;
//     });
//     setTask("");
//   };

//   const toggleTask = (index) => {
//     const updated = { ...todos };
//     updated[selectedDate][index].done = !updated[selectedDate][index].done;
//     setTodos(updated);
//   };

//   const deleteTask = (index) => {
//     const updated = { ...todos };
//     updated[selectedDate].splice(index, 1);
//     if (updated[selectedDate].length === 0) delete updated[selectedDate];
//     setTodos(updated);
//   };

//   const deleteAllForDate = () => {
//     const updated = { ...todos };
//     delete updated[selectedDate];
//     setTodos(updated);
//   };

//   const formattedDate = new Date(selectedDate).toLocaleDateString("en-US", {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });

//   return (
//     <div className="app">
//       <div className="todo-card">
//         <h1>{formattedDate.split(",")[0]}</h1>
//         <p>{formattedDate.split(",").slice(1).join(",")}</p>

//         <input
//           type="date"
//           value={selectedDate}
//           onChange={(e) => setSelectedDate(e.target.value)}
//         />

//         <div className="task-input">
//           <input
//             type="text"
//             placeholder="Add a task..."
//             value={task}
//             onChange={(e) => setTask(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter") {
//                 e.preventDefault(); // <-- important to prevent form submission or focus issues
//                 handleAddTask();
//               }
//             }}
//           />
//           <button onClick={handleAddTask}>+</button>
//         </div>

//         <ul className="todo-list">
//           {(todos[selectedDate] || []).map((todo, index) => (
//             <li key={index}>
//               <span className={todo.done ? "done" : ""}>{todo.text}</span>
//               <span
//                 className={`dot ${todo.done ? "green" : "gray"}`}
//                 onClick={() => toggleTask(index)}
//                 title="Toggle status"
//                 style={{ cursor: "pointer" }}
//               ></span>
//               <button onClick={() => deleteTask(index)}>🗑</button>
//             </li>
//           ))}
//         </ul>

//         {todos[selectedDate]?.length > 0 && (
//           <button className="delete-all" onClick={deleteAllForDate}>
//             Delete all for {formattedDate.split(",")[0]}
//           </button>
//         )}
//       </div>

//       <div className="todo-calendar">
//         <h2>📆 Days with Todos</h2>
//         <ul>
//           {Object.keys(todos).map((date) => (
//             <li key={date}>
//               <a href="#" onClick={() => setSelectedDate(date)}>
//                 {new Date(date).toLocaleDateString("en-US", {
//                   weekday: "long",
//                   month: "long",
//                   day: "numeric",
//                   year: "numeric",
//                 })}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;
