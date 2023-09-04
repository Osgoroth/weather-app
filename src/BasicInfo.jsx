import propTypes from "prop-types";

export default function BasicInfo({ weather }) {
  const {
    location: { name, country },
    current: {
      temp_c,
      humidity,
      condition: { icon, text },
    },
  } = weather;
  return (
    <div className="w-full sm:w-[320px] bg-gray-300 bg-opacity-25 h-72 flex flex-col justify-center items-center rounded-lg p-3">
      <div className="text-2xl sm:text-4xl text-center w-full">
        <p className="truncate max-w-xs">{name}</p>
      </div>
      <div className="text-md"> {country}</div>

      <img src={`https:${icon}`} alt="weather icon" className="w-16" />
      <div className="text-6xl">{temp_c + "C"}</div>
      <div>{text}</div>

      <div>Humidity: {humidity + "%"}</div>
    </div>
  );
}

BasicInfo.propTypes = {
  weather: propTypes.object.isRequired,
};
