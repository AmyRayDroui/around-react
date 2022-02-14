import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useState } from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <div className="page__wrapper">
        <Header />
        <Main 
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name="edit-profile" title="Edit profile">
        <input type="text" name="name" className="popup__input popup__input_type_name" id="name-input" required minLength="2" maxLength="40"/>
        <span className="popup__error name-input-error"></span>
        <input type="text" name="info" className="popup__input popup__input_type_info" id="info-input" required minLength="2" maxLength="200"/>
        <span className="popup__error info-input-error"></span>
      </PopupWithForm>
      <PopupWithForm isOpen={isEditAvatarPopupOpen}  onClose={closeAllPopups} name="edit-profile-image" title="Change profile picture">
        <input type="url" name="link" className="popup__input popup__input_type_profile-img-link" id="profile-img-link-input" required/>
        <span className="popup__error profile-img-link-input-error"></span>
      </PopupWithForm>
      <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name="add-card" title="New place">
        <input type="text" name="name" className="popup__input popup__input_type_card-name" id="card-name-input" placeholder="Card name" required maxLength="30"/>
        <span className="popup__error card-name-input-error"></span>
        <input type="url" name="link" className="popup__input popup__input_type_card-link" id="card-link-input" placeholder="Card link" required/>
        <span className="popup__error card-link-input-error"></span>
      </PopupWithForm>
      <PopupWithForm name="remove-card" title="Are you sure?" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;