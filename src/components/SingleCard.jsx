import "./SingleCard.css";

export default function SingleCard({
  card,
  handleChoice,
  flipped,
  disabled,
}) {
  const handlClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/public/img/cover.png"
          onClick={handlClick}
          alt="card-back"
        />
      </div>
    </div>
  );
}
