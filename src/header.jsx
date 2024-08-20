import data from "./assets/header.json";

const Header = () => {
  return (
    <>
      <header className="flex flex-col gap-2">
        <div className="border-b-2 border-black">
          <h1 className="text-4xl font-bold">{data.dashboardTitle}</h1>
          <span>{data.followers}</span>
        </div>
        <div className="flex justify-between">
          <span>{data.settings}</span>
          <input type="checkbox" />
        </div>
      </header>
    </>
  );
};

export default Header;
