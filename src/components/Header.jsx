import "./Header.css";

export default function Header() {
  const issue = "Issue No. 14";
  const date = "June 2026";

  return (
    <header className="header">
      <div className="topRule" />
      <div className="masthead">
        <p className="kicker">Wisdom Zine</p>
        <h1 className="title">Arts &amp; Creatives</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        </p>
      </div>

      <div className="stamp">
        <span>{issue}</span>
        <span>{date}</span>
      </div>
      <div className="bottomRule" />
    </header>
  );
}