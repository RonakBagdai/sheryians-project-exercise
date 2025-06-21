import { useState } from "react";

const Create = (props) => {
  // console.log(props);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = { name, age };
    console.log(newUser);
  };

  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) => setAge(e.target.value)}
          value={age}
          type="number"
          placeholder="Age"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Create;
