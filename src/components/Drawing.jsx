import "./Drawing.css";

export default function Drawing() {
  return (
    <section className="frame">
      <div className="polaroid">
        <div className="imageWrap">
          <img
            className="image"
            src="src/assets/drawing.png"
            alt="Digital drawing placeholder"
          />
        </div>

        <p className="caption">Attack of the Titans</p>
      </div>
    </section>
  );
}