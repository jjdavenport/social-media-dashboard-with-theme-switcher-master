import data from "./assets/overview.json";

const Overview = () => {
  return (
    <>
      <section className="flex flex-col gap-4 md:grid md:grid-rows-2 md:grid-flow-col p-4">
        {data.map((i) => (
          <div
            key={i.count}
            className="bg-lightThemeTopBgPattern dark:bg-darkThemeCardBg p-4 flex flex-col gap-4 rounded-md"
          >
            <div className="flex justify-between">
              <span className="text-lightThemeDarkGrayishBlueText font-bold dark:text-darkThemeText">
                {i.metric}
              </span>
              <img className="object-contain" src={i.images} />
            </div>
            <div className="flex justify-between items-end">
              <span className="font-bold text-4xl dark:text-darkThemeWhiteText text-lightThemeVeryDarkBlueText">
                {i.count}
              </span>
              <div className="flex h-fit gap-1">
                <img className="object-contain" src={i.arrow} />
                <span
                  className={`${
                    i.trend === true ? "text-limeGreen" : "text-brightRed"
                  } flex items-end font-bold`}
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
