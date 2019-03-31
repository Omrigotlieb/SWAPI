import Immutable , { fromJS } from "immutable";

const initialState = fromJS({
  data: {
    favoritesData: new Immutable.List([])
  }
});

function favorite(state = initialState, action) {

  switch (action.type) {
   case 'TOGGLE_FAVORITES':
    const isFavorite = !action.item.state.isFavorite;
    const params = action.item.state.props ? action.item.state.props.params : null;
    const item = action.item;
    const obj = Object.assign({}, item, {
      state: {isFavorite},
      params
      });
    if(isFavorite) {
      return state.updateIn(['data', 'favoritesData'], favorites => favorites.concat(obj));
    } else {
      return obj;
    }
   default:
     return state
 }
}

export default favorite;
