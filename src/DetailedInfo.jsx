import { Tab } from "@headlessui/react";

const tabs = {
  Wind: [
    ["Speed", "wind_mph", "mph"],
    ["Direction", "wind_dir"],
    ["Pressure", "pressure_mb", "hPa"],
  ],
  Rain: [
    ["Precipitation", "precip_mm", "mm"],
    ["Humidity", "humidity", "%"],
    ["Cloud cover", "cloud", "%"],
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function DetailedInfo({ weather }) {
  return (
    <div className="w-full sm:w-[320px] h-min sm:h-72">
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
        <Tab.Panels className="mt-2 flex-grow sm:h-[232px]">
          {Object.values(tabs).map((values) => (
            <Tab.Panel
              key={values}
              className={classNames(
                "rounded-lg bg-gray-300 bg-opacity-25 p-3 h-full",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2"
              )}
            >
              {/* // TODO: find a non-hardcoded */}

              {values.map(([title, value, unit]) => {
                {
                  return (
                    <p key={value} className="h-6">
                      {title}: {weather?.current[value]}
                      {unit}
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
