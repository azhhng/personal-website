import "../Card/Card.css";
import Emoji from "../Emoji/Emoji";

function WorkCard({ card }) {
  return (
    <article className="card">
      <div className="card-title">
        <Emoji name={card.emoji} width={25} height={25} />
        <h3><a href={card.website} target="_blank" rel="noreferrer">{card.title}</a></h3>
      </div>
      <p className="card-role">{card.role}</p>
      <p className="card-description">{card.description}</p>
      <div className="tag-container">
        {(card.techStack || card.tags).split(",").map((tag) => <span className="tag" key={tag}>{tag.trim()}</span>)}
      </div>
    </article>
  );
}

export default WorkCard;
