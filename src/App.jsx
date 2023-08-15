import { useState, useRef } from "react";
import "./App.css";
import BasicInfo from "./BasicInfo";
import DetailedInfo from "./DetailedInfo";

import SearchBox from "./Search";
import Loading from "./Loading";

// const api = "7a85bb5baaf54da3b0f82908231108";

function App() {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const [isError, setIsError] = useState(false);
  const container = useRef(null);

  async function getWeather(location) {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=7a85bb5baaf54da3b0f82908231108&q=${location}&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.location) {
          const contentBox = container.current;
          contentBox.classList.remove("h-16");
          setIsLoading(true);
          contentBox.classList.add("sm:h-[360px]");
          contentBox.classList.add("h-[520px]");

          setIsError(false);
          setTimeout(() => {
            setWeather(data);
            setIsLoading(false);
          }, 1500);
        } else {
          resetWeather();
          setIsError(true);
        }
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }

  function resetWeather() {
    // sets weather object to null then resets the styles to default state

    setWeather(null);
    const contentBox = container.current;
    contentBox.classList.add("h-16");
    contentBox.classList.remove("sm:h-[360px]");
    contentBox.classList.remove("h-[520px]");
  }

  return (
    <>
      <div className="max-w-lg sm:max-w-4xl h-screen mx-auto flex justify-center items-center">
        <div
          ref={container}
          className="w-[352px] sm:w-[640px] h-16 bg-gray-600 bg-opacity-25 rounded-lg shadow-lg text-white flex flex-col gap-2 p-4 transform transition-all duration-500"
        >
          <SearchBox getWeather={getWeather} resetWeather={resetWeather} />

          {!isError &&
            (isLoading ? (
              <Loading />
            ) : (
              weather && (
                <div className="flex flex-col sm:flex-row gap-2 max-h-min sm:h-72">
                  <BasicInfo weather={weather} />
                  <DetailedInfo weather={weather} />
                </div>
              )
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
