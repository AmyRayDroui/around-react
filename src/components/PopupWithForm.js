function PopupWithForm({children, name, title, isOpen, onClose}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_visible' : ''}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-button" onClick={onClose} aria-label="Close popup" />
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} noValidate>
          {children}
          <button type="submit" className="popup__save-button" aria-label="Submit">Save</button>
        </form>
      </div> 
    </div>
  );
}

export default PopupWithForm;