export default function BasicInfo({ weather }) {
  return (
    <div className="bg-gray-300 bg-opacity-25 w-full h-72 flex flex-col justify-center items-center rounded-lg p-3">
      <div className="text-4xl text-center">{weather?.location.name}</div>
      <div className="text-md"> {weather?.location.country}</div>

      <img
        src={`https:${weather?.current.condition.icon}`}
        alt="weather icon"
        className="w-16"
      />
      <div className="text-6xl">{weather?.current.temp_c + "C"}</div>
      <div>{weather?.current.condition.text}</div>

      <div>Humidity: {weather?.current.humidity + "%"}</div>
    </div>
  );
}
