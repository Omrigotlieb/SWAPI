function favorite(state =[], action) {

  switch (action.type) {
   case 'TOGGLE_FAVORITES':
   const isFavorite = !action.isFavorite;
    const obj = Object.assign({}, state, { isFavorite });
    console.log(JSON.stringify(obj));
     return obj;
   default:
     return state
 }
}

export default favorite;
