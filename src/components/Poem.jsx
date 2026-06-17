import { useRef, useState } from "react";
import "./Poem.css";

export default function Poem() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="section">
      <div className="headerRow">
        <span className="label">Political Poem</span>
        <button className="audioButton" onClick={toggleAudio} type="button">
          {isPlaying ? "Pause Recitation" : "Play Recitation"}
        </button>
      </div>

      <div className="paper">
        <h2 className="heading">Lorem Ipsum</h2>
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

        <audio
          ref={audioRef}
          src="src/assets/poem-audio.mp3"
          preload="metadata"
          onEnded={() => setIsPlaying(false)}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        />
      </div>
    </section>
  );
}