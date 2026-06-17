import "./Magazine.css";
import magazinePdf from "../assets/magazine.pdf";
import magazineFrontCover from "../assets/magazine-front-cover.png";

export default function Magazine() {
  return (
    <a
      className="card downloadCard"
      href={magazinePdf}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="labelRow">
        <span className="sectionLabel">Mini-Magazine</span>
        <span className="smallTag">PDF</span>
      </div>

      <div className="magazineBody">
        <div className="magazineCopy">
          <h2 className="heading">The Second Cold War</h2>
          <p className="copy">
            A dynamic, 8-page history mini-magazine exploring the complex evolution of the US-China rivalry, blending high-stakes geopolitical analysis with its relatable impact on public life, global alliances, and modern youth culture.
          </p>

          <div className="cardFoot">
            <span>View / Download</span>
            <span className="arrow">↗</span>
          </div>
        </div>

        <div className="thumbnail">
          <div className="paperStack">
            <span>
              <img
                src={magazineFrontCover}
                alt="Magazine Front Thumbnail"
              />
            </span>
            <span>
              <img
                src={magazineFrontCover}
                alt="Magazine Back Thumbnail"
              />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}