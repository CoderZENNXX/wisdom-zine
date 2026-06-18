import "./Drawing.css";
import drawingImage from "../assets/drawing.png";

export default function Drawing() {
  return (
    <section className="frame">
      <div className="polaroid">
        <div className="imageWrap">
          <img
            className="image"
            src={drawingImage}
            alt="Digital drawing of a stylized titan"
          />
        </div>

        <p className="caption">Attack of the Titans</p>
      </div>
    </section>
  );
}