import data from "./assets/dashboard.json";

const Dashboard = () => {
  return (
    <>
      <section>
        {data.map((i) => (
          <div key={i.followers} className={`${i.border} flex flex-col`}>
            <div className="flex">
              <img src={i.images} alt={i.username} />
              <span>{i.username}</span>
            </div>
            <span>{i.followers}</span>
            <span>{i.type}</span>
            <span>{i.changeToday}</span>
          </div>
        ))}
      </section>
    </>
  );
};

export default Dashboard;
