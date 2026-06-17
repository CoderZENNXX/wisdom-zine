import "./Footer.css";

export default function Footer() {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="divider">✦ ❖ ✦</div>
      <p className="copy">© 2026 Ink &amp; Notebooks</p>
      <button className="topButton" onClick={backToTop} type="button">
        Back to Top
      </button>
    </footer>
  );
}