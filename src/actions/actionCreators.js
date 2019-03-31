import axios from "axios";
import { SET_DATA, TOGGLE_FAVORITES } from "./types";

export function favoriteCard (item) {
  return {
    type: TOGGLE_FAVORITES,
    item
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
   payload: data.results,
   param: data.param
 };
};

 export function fetchDataFromAPI(param) {
  return function(dispatch) {
    const localStorageData = localStorage.getItem(param);
    if(!localStorageData) {
      return axios.get(`https://swapi.co/api/${param}`).then(({ data }) => {
        data.param = param;
        return new Promise(function(resolve, reject) {
                dispatch(setDataFromAPI(data));
                resolve(data);
            })
      });
    }
  };
};
