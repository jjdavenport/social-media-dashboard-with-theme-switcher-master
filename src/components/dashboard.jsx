import data from "./assets/dashboard.json";

const Dashboard = () => {
  return (
    <>
      <section className="flex flex-col md:grid md:grid-flow-col gap-6 p-4">
        {data.map((i) => (
          <div
            key={i.followers}
            className={`${i.border} flex flex-col bg-lightThemeCardBg items-center dark:bg-darkThemeCardBg gap-4 p-6`}
          >
            <div className="flex h-max gap-2">
              <img className="object-contain" src={i.images} alt={i.username} />
              <span className="font-bold text-lightThemeDarkGrayishBlueText dark:text-darkThemeText">
                {i.username}
              </span>
            </div>
            <span className="text-5xl dark:text-darkThemeWhiteText font-bold text-lightThemeVeryDarkBlueText">
              {i.followers}
            </span>
            <span className="uppercase tracking-widest dark:text-darkThemeText text-lightThemeVeryDarkBlueText">
              {i.type}
            </span>
            <div className="flex gap-1 items-center">
              <img className="object-contain" src={i.arrow} />
              <span
                className={`${
                  i.trend === true ? "text-limeGreen" : "text-brightRed"
                }  font-bold`}
              >
                {i.changeToday}
              </span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Dashboard;
