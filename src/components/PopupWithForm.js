function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_visible' : ''}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-button" onClick={props.onClose} aria-label="Close popup"></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name} noValidate>
          {props.children}
          <button type="submit" className="popup__save-button" aria-label="Submit">Save</button>
        </form>
      </div> 
    </div>
  );
}

export default PopupWithForm;