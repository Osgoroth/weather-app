import { FaMagnifyingGlass, FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
import propTypes from "prop-types";
// TODO: add form validation
export default function SearchBox({ getWeather, resetWeather }) {
  const [city, setCity] = useState("");
  const [isValid, setIsValid] = useState(true);

  function handleKeyDown(e) {
    //enter key performs a search
    if (e.keyCode === 13) handleSubmit(e);
    //escape key wipes the weather
    if (e.keyCode === 27) resetWeather();
    return;
  }

  function handleCityChange(e) {
    setCity(e.target.value);
    setIsValid(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const regex = new RegExp("^[A-Za-z]+$");
    const result = regex.test(city);
    if (!result) {
      setIsValid(false);
      // console.log(result);
      return;
    }

    isValid && getWeather(city);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row justify-between w-full">
        <input
          className={`bg-gray-600 bg-opacity-25 p-3 h-8 rounded-md w-full outline-none focus:ring-2 ${
            isValid ? "ring-white" : "ring-red-500"
          } ring-opacity-60 ring-offset-gray-400 focus:ring-offset-2`}
          placeholder="Enter City..."
          onChange={handleCityChange}
          onKeyDown={handleKeyDown}
          value={city}
          type="text"
          required
          pattern="[A-Za-z]+"
        ></input>
        <button className="btn btn--small  ml-1" type="submit">
          <FaMagnifyingGlass />
        </button>
        <button
          className="btn btn--small ml-1"
          onClick={() => {
            setCity("");
            resetWeather();
          }}
        >
          <FaArrowLeft />
        </button>
      </div>
    </form>
  );
}
SearchBox.propTypes = {
  getWeather: propTypes.func,
  resetWeather: propTypes.func,
};
