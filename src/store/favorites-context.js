import { createContext, useState } from "react";
/**
 * used to handle when meetups are favorited or unfavorited
 */

const FavoritesContext = createContext({ //original context
  favorites: [],
  totoalFavorites: 0,
  addFavorite: (favoriteMeetup) => {}, 
  removeFavorite: (meetupId) => {}, 
  itemIsFavorite: (meetup) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
        return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHanlder(meetupId){
    setUserFavorites(prevUserFavorites => {
        return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    })
  }

  function itemIsFavoriteHandler(meetupId){
    return userFavorites.some(meetup => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totoalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHanlder,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
