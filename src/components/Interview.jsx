import "./Interview.css";
import khunAudio from "../assets/khun-zaw-inter.mp3";
import hsuText from "../assets/hsu-margaret-inter.txt?raw";
import khunText from "../assets/khun-zaw-inter.txt?raw";
import stevenText from "../assets/steven-inter.txt?raw";

const interviews = [
  {
    name: "Khun Zaw",
    title: "Political Science Student • Mandalay",
    text: khunText,
    audio: khunAudio,
    interviewer: "Interviewed by Tayzar Naing",
    opinion: "Tayzar's Opinion",
    opinionText:
      "In my opinion, the interviewee has a lot of nuanced takes and I tend to agree with almost most of them. I acknowledge the fact China has had very much of an impact on Burma, our country. I believe they have controlled fields such as most of the Burmese government, business, economics and education.",
  },
  {
    name: "Hsu Margaret",
    title: "Student • Yangon",
    text: hsuText,
    interviewer: "Interviewed by Hsu Won Yan Moe",
    opinion: "Hsu's Opinion",
    opinionText:
      "In my opinion, the interviewee has a lot of nuanced takes and I tend to agree with almost most of them. I acknowledge the fact China has had very much of an impact on Burma, our country. I believe they have controlled fields such as most of the Burmese government, business, economics and education.",
  },
  {
    name: "Saw Steven Htoo",
    title: "Observer • International Affairs",
    text: stevenText,
    interviewer: "Interviewed by Eh Mu Thaw Htoo Phoe",
    opinion: "Eh Mu's Opinion",
    opinionText:
      "In my opinion, the interviewee has a lot of nuanced takes and I tend to agree with almost most of them. I acknowledge the fact China has had very much of an impact on Burma, our country. I believe they have controlled fields such as most of the Burmese government, business, economics and education.",
  },
];

function formatText(text) {
  return text
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export default function Interview() {
  return (
    <section className="interviewPage">
      <div className="interviewHero">
        <p className="sectionKicker">Interview</p>
        <h2>Voices on the China–US rivalry</h2>
        <p>
          Three sharp perspectives on power, geopolitics, and how global tension reshapes
          everyday life.
        </p>
      </div>

      <div className="interviewLayout">
        <div className="interviewCards">
          {interviews.map((entry) => (
            <article className="interviewCard" key={entry.name}>
              <p className="cardLabel">{entry.interviewer}</p>
              <h3>{entry.name}</h3>
              <p className="cardRole">{entry.title}</p>
              {entry.audio ? (
                <audio className="interviewAudio" controls preload="metadata">
                  <source src={entry.audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              ) : null}
              {formatText(entry.text).map((paragraph, index) => (
                <p className="cardText" key={`${entry.name}-${index}`}>
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>

        <aside className="opinionColumn" aria-label="Interviewer opinions">
          <div className="opinionHeader">
            <p className="opinionKicker">Editorial Note</p>
            <h3>Voices behind the voices</h3>
          </div>

          {interviews.map((entry) => (
            <div className="opinionBlock" key={`${entry.name}-opinion`}>
              <div className="opinionAccent" />
              <div>
                <p className="opinionTitle">{entry.opinion}</p>
                <p className="opinionText">{entry.opinionText}</p>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
