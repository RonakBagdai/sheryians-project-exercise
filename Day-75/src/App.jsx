import React, { useState } from "react";
import Create from "./Components/Create";
import Read from "./Components/Read";

const App = () => {
  const [users, setusers] = useState([
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 40 },
  ]);

  return (
    <div>
      <Create />
      <Read users={users} setusers={setusers} />
    </div>
  );
};

export default App;
