function fetchAPI(state =[], action) {

  switch (action.type) {
   case 'SET_DATA':
   debugger;
    let obj = {};
    // let param = action.param || 'data';
    // obj[param] = action.payload;
    obj.data = action.payload;
    return Object.assign({}, state, obj);
   default:
     return state
 }
}

export default fetchAPI;
