import data from "./assets/overview.json";

const Overview = () => {
  return (
    <>
      <section>
        {data.map((i) => (
          <div key={i.count}>
            <div className="flex justify-between">
              <span>{i.metric}</span>
              <img src={i.images} />
            </div>
            <div className="flex justify-between">
              <span>{i.count}</span>
              <span>{i.percentageChange}</span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Overview;
