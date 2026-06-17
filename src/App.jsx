import Header from "./components/Header";
import Magazine from "./components/Magazine";
import Poem from "./components/Poem";
import Drawing from "./components/Drawing";
import Rap from "./components/Rap";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="appShell">
      <Header />

      <main className="mainGrid">
        <Magazine />
        <Poem />
        <Drawing />
        <Rap />
      </main>

      <Footer />
    </div>
  );
}