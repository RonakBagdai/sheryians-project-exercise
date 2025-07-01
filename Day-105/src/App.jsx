import { use, useMemo, useState } from "react";

const App = () => {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(99);

  const product = useMemo(() => {
    console.log("Calculating product...");
    return add * 2;
  }, [add]);

  return (
    <div className="text-white bg-gray-800 w-screen h-screen">
      <h1 className="text-4xl font-bold text-center">{product}</h1>
      <div className="flex justify-center items-center p-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setAdd(add + 1)}
        >
          +
        </button>
        <span className="mx-4 text-2xl">{add}</span>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setSub(sub - 1)}
        >
          -
        </button>
        <span className="mx-4 text-2xl">{sub}</span>
      </div>
    </div>
  );
};

export default App;
