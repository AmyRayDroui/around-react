import React from 'react';
import Card from './Card.js';
import api from '../utils/api.js';


function Main({onEditAvatarClick, onEditProfileClick, onAddPlaceClick, onCardClick}) {
  const [user, setUser] = React.useState({
    name: '',
    description: '',
    avatar: ''
  });
  const [cards, setCards] = React.useState([]);
  
  React.useEffect(() => {
    api.getUserInfo()
    .then(userInfo => {
      setUser({
        name: userInfo.name,
        description: userInfo.about,
        avatar: userInfo.avatar
      });
    })
    .catch((error) => {
      console.log(error);
    });
  },[]);

  React.useEffect(() => {
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
        <img id="profile-image" src={user.avatar} alt={`${user.name}'s avatar`} className="profile__image"/>
        <button className="profile__image-overlay" onClick={onEditAvatarClick} />
      </div>
      <div className="profile__container profile__overflow-element">
        <h1 className="profile__name profile__overflow-element">{user.name}</h1>
        <button type="button" className="profile__button profile__button_type_edit" onClick={onEditProfileClick} aria-label="Edit profile" />
      </div>
      <p className="profile__info profile__overflow-element">{user.description}</p>
      <button type="button" className="profile__button profile__button_type_add-image" onClick={onAddPlaceClick} aria-label="Add image" />
    </section>
    <section className="images-container">
      {
        cards.map((cardElement) => 
        (
          <Card card={cardElement} onCardClick={onCardClick} key={cardElement._id}/>
        ))
      }
    </section>
    </main>
  );
}

export default Main;