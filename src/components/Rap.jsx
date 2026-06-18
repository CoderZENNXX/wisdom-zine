import "./Rap.css";

const lyricLines = [
  { start: 0, end: 3.5, text: "Back page fold, loose-leaf soul, ink runs warm in the light," },
  { start: 3.5, end: 7, text: "Graph paper thoughts, streetwise notes, tapping on the desk at night." },
  { start: 7, end: 10.5, text: "Margins full of quick replies, penciled hooks and paper scars," },
  { start: 10.5, end: 14, text: "Old-school rhythm in a lunchbox beat, underneath the hallway stars." },
  { start: 14, end: 17.5, text: "Fresh tape hiss and a steady pulse, walking through the ruled-up page," },
  { start: 17.5, end: 21, text: "Turn the volume, let it breathe, let the chorus wear the age." },
  { start: 21, end: 24.5, text: "Steel tip shine and a half-erased line, still it lands with force," },
  { start: 24.5, end: 28, text: "Quiet little anthem on a creased notebook, riding its own course." }
];

export default function Rap() {
  const currentTime = 0;
  const duration = 0;
  const progress = 0;
  const activeLineIndex = 0;

  return (
    <section className="section">
      <div className="headerRow">
        <div>
          <span className="label">Rap</span>
          <h2 className="heading">Raw Lyrics</h2>
        </div>
        <button className="audioButton" type="button" disabled>
          Track Unavailable
        </button>
      </div>

      <div className="player">
        <div className="progressTrack" aria-hidden="true">
          <div className="progressFill" style={{ width: `${progress}%` }} />
        </div>

        <div className="timeRow">
          <span>{currentTime.toFixed(1)}s</span>
          <span>{duration ? `${duration.toFixed(1)}s` : "—"}</span>
        </div>

        <div className="lyricsGrid">
          {lyricLines.map((line, index) => (
            <p
              key={`${line.start}-${index}`}
              className={`lyricLine ${index === activeLineIndex ? "activeLine" : ""}`}
            >
              {line.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}