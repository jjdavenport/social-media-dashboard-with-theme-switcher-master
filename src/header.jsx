import data from "./assets/header.json";

const Header = () => {
  return (
    <>
      <h1>{data.dashboardTitle}</h1>
      <span>{data.totalFollowers}</span>
      <div>
        <span>{data.settings}</span>
        <button></button>
      </div>
    </>
  );
};

export default Header;
