import { Tab } from "@headlessui/react";

const tabs = {
  Wind: [
    ["Speed (mph)", "wind_mph"],
    ["Direction", "wind_dir"],
    ["Pressure", "pressure_mb"],
  ],
  Rain: [
    ["Precipitation", "precip_mm"],
    ["Humidity", "humidity"],
    ["Cloud cover", "cloud"],
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function DetailedInfo({ weather }) {
  return (
    <div className="w-full">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-300 bg-opacity-25 p-1">
          {Object.keys(tabs).map((tab) => {
            return (
              <Tab
                key={tab}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-gray-900  bg-opacity-10 shadow text-gray-800"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {tab}
              </Tab>
            );
          })}
        </Tab.List>
        <Tab.Panels className="mt-2 h-auto">
          {Object.values(tabs).map((values) => (
            <Tab.Panel
              key={values}
              className={classNames(
                "rounded-xl bg-gray-300 bg-opacity-25 p-3 h-full",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2"
              )}
            >
              {values.map(([title, value]) => {
                {
                  return (
                    <p key={value}>
                      {title}: {weather?.current[value]}
                    </p>
                  );
                }
              })}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
