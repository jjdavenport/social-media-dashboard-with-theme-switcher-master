import data from "./assets/header.json";
import { useState } from "react";

const Header = () => {
  return (
    <>
      <header className="flex flex-col gap-4 p-4 bg-lightThemeTopBgPattern dark:bg-darkThemeTopBgPattern rounded-b-xl">
        <div className="border-b border-lightThemeVeryDarkBlueText pb-4 dark:border-darkThemeCardBg">
          <h1 className="text-4xl font-bold text-lightThemeVeryDarkBlueText dark:text-darkThemeWhiteText">
            {data.dashboardTitle}
          </h1>
          <span className="text-lightThemeDarkGrayishBlueText font-bold dark:text-darkThemeText">
            {data.followers}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold text-lightThemeDarkGrayishBlueText dark:text-darkThemeText">
            {data.settings}
          </span>
          <input type="checkbox" />
        </div>
      </header>
    </>
  );
};

export default Header;
