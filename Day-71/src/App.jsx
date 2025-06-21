import React, { Fragment } from "react";

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleParamClick = (param) =>
    alert(`Button clicked with parameter: ${param}`);

  // const wrapperHandle = () => handleParamClick("Hello");

  return (
    <>
      <h1>{2 + 3}</h1>
      <div>App</div>
      <div>Hello</div>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => handleParamClick("Hello")}>Click(Param)</button>
    </>
  );
};
export default App;
