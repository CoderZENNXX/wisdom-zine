import "./Poem.css";

export default function Poem() {
  const poemLines = [
    "The dragon is brave enough,",
    "Developments what eagle does,",
    "Each fights against,",
    "Does not smooth like a dance.",
    "",
    "Two giants' argument,",
    "Leading the new governments,",
    "The gloval rival is marked,",
    "That's where the SECOND Cold War starts.",
    "",
    "- Hsu Won Yan Moe",
  ];

  return (
    <section className="section">
      <div className="headerRow">
        <span className="label">Poem</span>
        <button className="audioButton" type="button" disabled>
          Recitation Unavailable
        </button>
      </div>

      <div className="paper">
        <h2 className="heading">Notebook Poem</h2>
        <pre className="poem">
          {poemLines.map((line, index) =>
            line === "" ? (
              <span key={`blank-${index}`} className="poemBlankLine" />
            ) : index === poemLines.length - 1 ? (
              <span key={line} className="poemSignatureLine">
                <i>{line}</i>
              </span>
            ) : (
              <span key={line} className="poemLine">
                {line}
              </span>
            )
          )}
        </pre>

      </div>
    </section>
  );
}