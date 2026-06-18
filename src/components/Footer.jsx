import "./Footer.css";

export default function Footer() {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footerRow">
        <div className="footerBrand">Wisdom Zine - Arts &amp; Creatives</div>

        <div className="footerSocials">
          <span className="footerLabel">Dev: <i>Tayzar Naing</i></span>
          <div className="footerLinks">
            <a href="https://github.com/CoderZENNXX" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.instagram.com/tayzar.naing.insta/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.tiktok.com/@tayzar.naing.tiktok" target="_blank" rel="noreferrer">
              TikTok
            </a>
            <a href="https://www.facebook.com/tayzar.naing.fb" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>
      </div>

      <button className="topButton" onClick={backToTop} type="button">
        Back to Top
      </button>
    </footer>
  );
}