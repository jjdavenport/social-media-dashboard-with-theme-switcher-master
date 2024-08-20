import "./App.css";
import Header from "./header";
import Dashboard from "./dashboard";
import Overview from "./overview";
import OverviewTitle from "./overview-title";
import Footer from "./footer";

function App() {
  return (
    <>
      <main className="p-4 font-inter flex flex-col gap-2">
        <Header />
        <Dashboard />
        <OverviewTitle />
        <Overview />
      </main>
      <Footer />
    </>
  );
}

export default App;
