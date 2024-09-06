import Header from "./components/header";
import Dashboard from "./components/dashboard";
import Overview from "./components/overview";
import OverviewTitle from "./components/overview-title";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <main className="font-inter flex flex-col gap-2 bg-lightThemeBg dark:bg-darkThemeBg md:h-screen md:justify-between">
        <section>
          <Header />
          <Dashboard />
          <OverviewTitle />
          <Overview />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
