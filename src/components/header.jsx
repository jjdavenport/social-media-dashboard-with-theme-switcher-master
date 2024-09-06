import { useState, useEffect } from "react";
import data from "./assets/header.json";

const Header = () => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  const toggle = () => {
    setDarkMode(prev => !prev)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <header className="flex flex-col md:justify-between md:flex-row gap-4 p-6 rounded-b-2xl bg-lightThemeTopBgPattern dark:bg-darkThemeTopBgPattern md:p-8 md:pb-32 pb-16 xl:px-24">
        <div className="border-b md:border-none border-lightThemeVeryDarkBlueText pb-4 dark:border-darkThemeCardBg">
          <h1 className="text-2xl md:text-3xl font-bold text-lightThemeVeryDarkBlueText dark:text-darkThemeWhiteText">
            {data.dashboardTitle}
          </h1>
          <span className="text-lightThemeDarkGrayishBlueText font-bold text-lg dark:text-darkThemeText">
            {data.followers}
          </span>
        </div>
        <div className="flex justify-between md:items-center md:text-lg">
          <span
            className={`${
              darkMode
                ? "dark:text-darkThemeText"
                : "text-lightThemeDarkGrayishBlueText"
            } font-bold`}
          >
            {data.settings}
          </span>
          <button
            onClick={toggle}
            className={` ${!darkMode ? "bg-lightThemeDarkGrayishBlueText" : "bg-gradient-to-r from-[hsl(210,78%,56%)] to-[hsl(146,68%,55%)]"} relative inline-flex items-center cursor-pointer ml-4 w-14 h-6 rounded-full 
              transition-colors duration-300 ease-in-out`}
          >
            <div
              className={`absolute top-[2px] left-[2px] bg-[hsl(230,17%,14%)] rounded-full h-5 w-5 
                transition-all duration-300 ease-in-out
                ${!darkMode ? 'translate-x-8 bg-white' : 'translate-x-0'}`}
            ></div>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
