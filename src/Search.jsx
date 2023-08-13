import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
// TODO: add form validation
export default function SearchBox({ getWeather }) {
  const [city, setCity] = useState("");

  return (
    <div className="flex flex-row justify-between w-full">
      <input
        className="bg-gray-600 bg-opacity-25 p-3 h-8 rounded-md w-full outline-none focus:ring ring-white ring-opacity-60 ring-offset-gray-400 focus:ring-offset-2"
        placeholder="Enter City..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
        required
      ></input>
      <button
        className="rounded-md bg-gray-600 hover:bg-gray-300 hover:text-gray-800 h-8 w-8 flex justify-center items-center ml-1 focus:ring ring-white ring-opacity-60 ring-offset-gray-400 focus:ring-offset-2"
        onClick={() => {
          getWeather(city);
        }}
      >
        <FaMagnifyingGlass />
      </button>
    </div>
  );
}
