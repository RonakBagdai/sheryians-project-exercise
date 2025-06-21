import { useState } from "react";
import { createContext } from "react";

export const todocontext = createContext(null);

const Wrapper = (props) => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  return (
    <todocontext.Provider value={[todos, setTodos]}>
      {props.children}s
    </todocontext.Provider>
  );
};

export default Wrapper;
