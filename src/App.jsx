import { useState } from "react";
import Header from "./components/Header";
import Magazine from "./components/Magazine";
import Poem from "./components/Poem";
import Drawing from "./components/Drawing";
import Rap from "./components/Rap";
import Footer from "./components/Footer";
import Interview from "./components/Interview";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="appShell">
      <Header />

      <nav className="pageNav" aria-label="Section navigation">
        <button
          type="button"
          className={page === "home" ? "navButton active" : "navButton"}
          onClick={() => setPage("home")}
        >
          Home
        </button>
        <button
          type="button"
          className={page === "interview" ? "navButton active" : "navButton"}
          onClick={() => setPage("interview")}
        >
          Interview
        </button>
      </nav>

      {page === "home" ? (
        <main className="mainGrid">
          <Magazine />
          <Poem />
          <Drawing />
          <Rap />
        </main>
      ) : (
        <Interview />
      )}

      <Footer />
    </div>
  );
}