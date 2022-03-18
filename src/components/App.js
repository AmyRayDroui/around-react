import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup  from './EditAvatarPopup';
import api from '../utils/api.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({
    name: '',
    description: '',
    avatar: null,
    id: ''
  });

  useEffect(() => {
    api.getUserInfo()
    .then(userInfo => {
      setCurrentUser({
        name: userInfo.name,
        description: userInfo.about,
        avatar: userInfo.avatar,
        _id: userInfo._id
      });
    })
    .catch((error) => {
      console.log(error);
    });
  },[]);


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

  function handleUpdateUser(data) {
    api.setUserInfo(data)
    .then(userInfo => {
      setCurrentUser({
        name: userInfo.name,
        description: userInfo.about,
        avatar: userInfo.avatar,
        _id: userInfo._id
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  function handleUpdateAvatar(data) {
    api.setUserAvatar(data)
    .then(userInfo => {
      setCurrentUser({
        name: userInfo.name,
        description: userInfo.about,
        avatar: userInfo.avatar,
        _id: userInfo._id
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
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
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
        
        <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name="add-card" title="New place">
          <input type="text" name="name" className="popup__input popup__input_type_card-name" id="card-name-input" placeholder="Card name" required maxLength="30"/>
          <span className="popup__error card-name-input-error"></span>
          <input type="url" name="link" className="popup__input popup__input_type_card-link" id="card-link-input" placeholder="Card link" required/>
          <span className="popup__error card-link-input-error"></span>
        </PopupWithForm>
        <PopupWithForm name="remove-card" title="Are you sure?" />
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
