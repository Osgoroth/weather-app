import {
  FaMagnifyingGlass,
  FaArrowLeft,
  FaLocationCrosshairs,
} from "react-icons/fa6";
import { useState } from "react";
import propTypes from "prop-types";
// TODO: add form validation
export default function SearchBox({ getWeather, resetWeather }) {
  const [location, setLocation] = useState("");
  const [isValid, setIsValid] = useState(true);

  function handleKeyDown(e) {
    //enter key performs a search
    if (e.keyCode === 13) handleSubmit(e);
    //escape key wipes the weather
    if (e.keyCode === 27) resetWeather();
    return;
  }

  function handleCityChange(e) {
    setLocation(e.target.value);
    setIsValid(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const regex = new RegExp("^[A-Za-z]+$");
    const result = regex.test(location);
    if (!result) {
      setIsValid(false);
      // console.log(result);
      return;
    }

    isValid && getWeather(location);
  }

  function getLocationWeather(e) {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition((data) => {
      // console.log(data);
      const latLong = `${data.coords.latitude},${data.coords.longitude}`;

      getWeather(latLong);
    });
  }

  return (
    <form>
      <div className="flex flex-row justify-between w-full">
        <button className="btn btn--small  mr-1" onClick={getLocationWeather}>
          <FaLocationCrosshairs />
        </button>
        <input
          className={`bg-gray-600 bg-opacity-25 p-3 h-8 rounded-md w-full outline-none focus:ring-2 ${
            isValid ? "ring-white" : "ring-red-500"
          } ring-opacity-60 ring-offset-gray-400 focus:ring-offset-2`}
          placeholder="Enter City..."
          onChange={handleCityChange}
          onKeyDown={handleKeyDown}
          value={location}
          type="text"
          pattern="[A-Za-z]+"
        ></input>
        <button
          className="btn btn--small  ml-1"
          type="submit"
          onClick={handleSubmit}
        >
          <FaMagnifyingGlass />
        </button>

        <button
          className="btn btn--small ml-1"
          type="reset"
          onClick={() => {
            setLocation("");
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
