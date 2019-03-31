import { fromJS } from "immutable";

const initialState = fromJS({
  data: { 'films/': [], 'people/': [] }
});

function fetchAPI(state = initialState, action) {

  switch (action.type) {
   case 'SET_DATA':
    let obj = {};
    obj[action.param] = action.payload;
    const newState = Object.assign({}, state, obj);
    localStorage.setItem(action.param, JSON.stringify(newState));
    return newState;

   default:
     return state;
 }
}

export default fetchAPI;
