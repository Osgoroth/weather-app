import { Suspense, useState } from "react";
import "./App.css";
import BasicInfo from "./BasicInfo";
import DetailedInfo from "./DetailedInfo";

import SearchBox from "./Search";
import Loading from "./Loading";

// const api = "7a85bb5baaf54da3b0f82908231108";

function App() {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState();

  async function getWeather(location) {
    try {
      setIsLoading(true);
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=7a85bb5baaf54da3b0f82908231108&q=${location}&aqi=no`
      )
        .then((response) => response.json())
        .then((data) => {
          setTimeout(() => {
            setWeather(data);
            setIsLoading(false);
          }, 2000);
        });
    } catch {
      return [];
    }
  }

  return (
    <>
      <div className="container h-screen mx-auto flex justify-center items-center">
        <div className="w-80 sm:w-2/3 h-min bg-gray-600 bg-opacity-25 rounded-lg shadow-lg text-white flex flex-col gap-2 p-4">
          <SearchBox getWeather={getWeather} />
          {isLoading ? (
            <Loading />
          ) : (
            weather && (
              <div className="flex flex-col md:flex-row gap-2">
                <BasicInfo weather={weather} />
                <DetailedInfo weather={weather} />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default App;