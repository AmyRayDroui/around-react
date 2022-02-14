import React from 'react';
import Card from './Card.js';
import api from '../utils/api.js';


function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar , setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
  
  React.useEffect(() => {
    api.getUserInfo()
    .then(userInfo => {
      setUserName(userInfo.name);
      setUserDescription(userInfo.about);
      setUserAvatar(userInfo.avatar);
    })
    .catch((error) => {
      console.log(error);
    });
    api.getInitialCards()
    .then(serverCards => {
      setCards(serverCards);
    })
    .catch((error) => {
      console.log(error);
    });
  },[]);


  return (
    <main className="content">
    <section className="profile">
      <div className="profile__image-container">
        <img id="profile-image" src={userAvatar} alt={`${userName}'s avatar'`} className="profile__image"/>
        <button className="profile__image-overlay" onClick={props.onEditAvatarClick}></button>
      </div>
      <div className="profile__container profile__overflow-element">
        <h1 className="profile__name profile__overflow-element">{userName}</h1>
        <button type="button" className="profile__button profile__button_type_edit" onClick={props.onEditProfileClick} aria-label="Edit profile"></button>
      </div>
      <p className="profile__info profile__overflow-element">{userDescription}</p>
      <button type="button" className="profile__button profile__button_type_add-image" onClick={props.onAddPlaceClick} aria-label="Add image"></button>
    </section>
    <section className="images-container">
      {
        cards.map((cardElement) => 
        (
          <Card card={cardElement} onCardClick={props.onCardClick} key={cardElement._id}/>
        ))
      }
    </section>
    </main>
  );
}

export default Main;