import data from "./assets/overview.json";

const Overview = () => {
  return (
    <>
      <section className="flex flex-col gap-2">
        {data.map((i) => (
          <div
            key={i.count}
            className="bg-lightThemeTopBgPattern p-4 flex flex-col gap-2 rounded-md"
          >
            <div className="flex justify-between">
              <span>{i.metric}</span>
              <img className="object-contain" src={i.images} />
            </div>
            <div className="flex justify-between items-end">
              <span className="font-bold text-4xl">{i.count}</span>
              <div className="flex h-fit gap-1">
                <img className="object-contain" src={i.arrow} />
                <span
                  className={`${
                    i.trend === true ? "text-limeGreen" : "text-brightRed"
                  } flex items-end`}
                >
                  {i.percentageChange}
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Overview;
