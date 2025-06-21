// const App = () => {
//   let n = 12;
//   let s = "Hello";
//   let b = true;
//   let nu = null;
//   let un = undefined;
//   let arr = [1, 2, 3];
//   let obj = {
//     name: "John",
//     age: 30,
//   };
//   const profiles = [
//     {
//       name: "John",
//       age: 30,
//     },
//     {
//       name: "Jane",
//       age: 25,
//     },
//     {
//       name: "Doe",
//       age: 35,
//     },
//   ];

import { useState } from "react";

//   const updatedProfiles = profiles.map((item, index) => {
//     return (
//       <li key={index}>
//         <div>Name: {item.name}</div>
//         <div>Age: {item.age}</div>
//       </li>
//     );
//   });

//   return (
//     <div>
//       <h1>Datatypes</h1>
//       <h2>Number: {n}</h2>
//       <h2>String: {s}</h2>
//       <h2>Boolean: {b}</h2>
//       <h2>Boolean: {b ? "True" : "False"}</h2>
//       <h2>Null: {nu}</h2>
//       <h2>Undefined: {un}</h2>
//       <h2>Array: {arr}</h2>
//       <h2>Array: {arr.join(", ")}</h2>
//       <h2>Object: {obj.name}</h2>
//       <h2>Object: {obj.age}</h2>
//       <h2>Object: {JSON.stringify(obj)}</h2>
//       <ol>{updatedProfiles}</ol>
//     </div>
//   );
// };

// export default App;

const App = () => {
  const [userName, setUserName] = useState("Rohan");

  const changeName = () => {
    setUserName("Ronak");
  };

  return (
    <div>
      <h1>UserName</h1>
      <h2>{userName}</h2>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

export default App;
