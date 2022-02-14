function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  } 

  return (
  <div className="image-card">
    <div className="image-card__image" style={{ backgroundImage: `url(${card.link})` }} onClick={handleClick}></div>
    <button type="button" className="image-card__remove-button" aria-label="remove an image"></button>
    <div className="image-card__name-container">
      <h2 className="image-card__name">{card.name}</h2>
      <div className="image-card__love-button-container">
        <button type="button" className="image-card__love-button" aria-label="Like an image"></button>
        <p className="image-card__love-count">{card.likes.length}</p>
      </div>
    </div>
  </div>
  );
}

export default Card;
