import data from "./assets/dashboard.json";

const Dashboard = () => {
  return (
    <>
      <ul className="flex flex-col md:grid md:grid-flow-col gap-6 p-4">
        {data.map((i) => (
          <li
            key={i.followers}
            className={`${i.border} flex flex-col hover:bg-lightThemeHover cursor-pointer hover:dark:bg-darkThemeHover bg-lightThemeCardBg items-center dark:bg-darkThemeCardBg gap-6 p-8 transition duration-300 ease-in-out`}
          >
            <div className="flex h-max gap-2">
              <img className="object-contain" src={i.images} alt={i.username} />
              <span className="font-bold text-lightThemeDarkGrayishBlueText dark:text-darkThemeText">
                {i.username}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
            <span className="text-6xl dark:text-darkThemeWhiteText font-bold text-lightThemeVeryDarkBlueText">
              {i.followers}
            </span>
            <span className="uppercase tracking-customSpacing dark:text-darkThemeText text-lightThemeVeryDarkBlueText">
              {i.type}
            </span>
            </div>
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
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dashboard;
