import data from "./assets/header.json";

const OverviewTitle = () => {
  return (
    <>
      <h2 className="p-4 text-2xl font-bold text-lightThemeDarkGrayishBlueText dark:text-darkThemeWhiteText">
        {data.overviewTitle}
      </h2>
    </>
  );
};

export default OverviewTitle;
