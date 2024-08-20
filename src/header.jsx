import data from "./assets/header.json";

const Header = () => {
  return (
    <>
      <header className="flex flex-col md:justify-between md:flex-row gap-4 p-4 bg-lightThemeTopBgPattern dark:bg-darkThemeTopBgPattern rounded-b-xl">
        <div className="border-b md:border-none border-lightThemeVeryDarkBlueText pb-4 dark:border-darkThemeCardBg">
          <h1 className="text-2xl font-bold text-lightThemeVeryDarkBlueText dark:text-darkThemeWhiteText">
            {data.dashboardTitle}
          </h1>
          <span className="text-lightThemeDarkGrayishBlueText font-bold dark:text-darkThemeText">
            {data.followers}
          </span>
        </div>
        <div className="flex justify-between md:items-center md:gap-4">
          <span className="font-bold text-lightThemeDarkGrayishBlueText dark:text-darkThemeText">
            {data.settings}
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div
              className="w-14 h-6 rounded-full 
                            bg-[hsl(228,12%,44%)] 
                            dark:bg-gray-700 
                            peer-checked:bg-gradient-to-r peer-checked:from-[hsl(210,78%,56%)] peer-checked:to-[hsl(146,68%,55%)]
                            dark:peer-checked:bg-gradient-to-r dark:peer-checked:from-[hsl(210,78%,56%)] dark:peer-checked:to-[hsl(146,68%,55%)]
                            transition-colors duration-300 ease-in-out"
            ></div>
            <div
              className="absolute top-[2px] right-[2px] bg-white rounded-full h-5 w-5 
                            transition-all duration-300 ease-in-out
                            peer-checked:translate-x-[-2rem]
                            peer-checked:bg-[hsl(230,17%,14%)]"
            ></div>
          </label>
        </div>
      </header>
    </>
  );
};

export default Header;
