import "./Poem.css";

export default function Poem() {
  const poemLines = [
    "The dragon is brave enough,",
    "Developments what eagle does,",
    "Each move a step,",
    "competing the best.",
    "",
    "While two giants debate across the seas,",
    "Children dream of having peace.",
    "Rivals on the global stage,",
    "Wisdom guide each future page.",
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