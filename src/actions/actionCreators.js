import axios from "axios";
import { SET_DATA, TOGGLE_FAVORITES } from "./types";

export function favoriteCard (isFavorite) {
  return {
    type: TOGGLE_FAVORITES,
    isFavorite
  }
};

export function unfavoriteCard (index) {
  return {
    type: 'REMOVE_FROM_FAVORITES',
    index
  }
};

export function setDataFromAPI(data) {
 return {
   type: SET_DATA,
   payload: data
 };
};

 export function fetchDataFromAPI(param) {
  return function(dispatch) {
    return axios.get(`https://swapi.co/api/${param}`).then(({ data }) => {
      dispatch(setDataFromAPI(data.results));
    });
  };
};
