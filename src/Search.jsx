import { FaMagnifyingGlass, FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
// TODO: add form validation
export default function SearchBox({ getWeather, resetWeather }) {
  const [city, setCity] = useState("");

  return (
    <div className="flex flex-row justify-between w-full">
      <input
        className="bg-gray-600 bg-opacity-25 p-3 h-8 rounded-md w-full outline-none focus:ring ring-white ring-opacity-60 ring-offset-gray-400 focus:ring-offset-2 invalid:ring-red-600"
        placeholder="Enter City..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
        type="text"
        required
        pattern="[A-Za-z]+"
      ></input>
      <button
        className="btn btn--small  ml-1"
        onClick={() => {
          getWeather(city);
        }}
      >
        <FaMagnifyingGlass />
      </button>
      <button
        className="btn btn--small  ml-1"
        onClick={() => {
          setCity("");
          resetWeather();
        }}
      >
        <FaArrowLeft />
      </button>
    </div>
  );
}
