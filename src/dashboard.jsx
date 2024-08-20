import data from "./assets/dashboard.json";

const Dashboard = () => {
  return (
    <>
      <section className="flex flex-col gap-4">
        {data.map((i) => (
          <div
            key={i.followers}
            className={`${i.border} flex flex-col bg-lightThemeTopBgPattern items-center gap-2 p-4 rounded-md`}
          >
            <div className="flex h-max gap-2">
              <img className="object-contain" src={i.images} alt={i.username} />
              <span>{i.username}</span>
            </div>
            <span className="text-5xl font-bold">{i.followers}</span>
            <span className="uppercase tracking-widest">{i.type}</span>
            <div className="flex gap-1 items-center">
              <img className="object-contain" src={i.arrow} />
              <span
                className={`${
                  i.trend === true ? "text-limeGreen" : "text-brightRed"
                }`}
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
