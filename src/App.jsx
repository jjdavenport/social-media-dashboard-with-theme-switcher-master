import Header from "./components/header";
import Dashboard from "./components/dashboard";
import Overview from "./components/overview";
import OverviewTitle from "./components/overview-title";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="font-inter flex flex-col gap-2 text-sm bg-lightThemeBg dark:bg-darkThemeBg md:h-screen md:justify-between md:items-center">
      <div className="flex flex-col w-full">
      <Header />
        <main className="md:-mt-36 md:p-2 lg:p-4 -mt-14 xl:px-20"> 
          <section>
          <Dashboard />
          </section>
          <section className="p-6 md:p-2 lg:p-4 flex flex-col gap-4">
          <OverviewTitle />
          <Overview />
          </section>
        </main>
        </div>
          <Footer />
          </div>
    </>
  );
}

export default App;
