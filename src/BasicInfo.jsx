export default function BasicInfo({ weather }) {
  return (
    <div className="w-full sm:w-[320px] bg-gray-300 bg-opacity-25 h-72 flex flex-col justify-center items-center rounded-lg p-3">
      <div className="text-2xl sm:text-4xl text-center w-full">
        <p className="truncate max-w-xs">{weather?.location.name}</p>
      </div>
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
