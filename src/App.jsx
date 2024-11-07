import { useState } from "react";

function App() {
  let [colour, setColour] = useState("#212121");

  return (
    <>
      <div
        className="w-full h-screen pt-12 duration-700"
        style={{ backgroundColor: colour }}
      >
        <div
          className="
        flex flex-row flex-wrap justify-center items-center top-12
        "
        >
          <nav
            className="bg-white
          flex flex-row gap-3 flex-wrap justify-center items-center px-3 py-2 rounded-full shadow-2xl
          "
          >
            <button
              className=" bg-red-600 text-white px-3 py-2 rounded-full shadow-xl"
              onClick={() => setColour("rgb(220,38,37)")}
            >
              Red
            </button>
            <button
              className=" bg-green-700 text-white px-3 py-2 rounded-full shadow-xl"
              onClick={() => setColour("rgb(23,128,61)")}
            >
              Green
            </button>
            <button
              className=" bg-blue-900 text-white px-3 py-2 rounded-full shadow-xl"
              onClick={() => setColour("rgb(31,58,138)")}
            >
              Blue
            </button>

            <button
              className=" bg-gray-500 text-white px-3 py-2 rounded-full"
              onClick={() => setColour("rgb(107,114,128)")}
            >
              Gray
            </button>
            <button
              className=" bg-yellow-300 text-black px-3 py-2 rounded-full"
              onClick={() => setColour("rgb(253,224,71)")}
            >
              Yellow
            </button>
            <button
              className=" bg-pink-400 text-white px-3 py-2 rounded-full"
              onClick={() => setColour("rgb(244,113,183)")}
            >
              Pink
            </button>
            <button
              className=" bg-purple-900 text-white px-3 py-2 rounded-full"
              onClick={() => setColour("rgb(88,28,135)")}
            >
              Purple
            </button>
            <button
              className=" bg-purple-200 text-black px-3 py-2 rounded-full"
              onClick={() => setColour("rgb(233,213,255)")}
            >
              Lavender
            </button>
            <button
              className=" bg-white text-black px-3 py-2 rounded-full shadow-xl"
              onClick={() => setColour("white")}
            >
              White
            </button>
            <button
              className="bg-black text-white px-3 py-2 rounded-full"
              onClick={() => setColour("black")}
            >
              Black
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}

export default App;
