//state here is no the application state. this state only care about the
//reducer it is responsible for.
export default function(state=null, action){
  switch (action.type) {
    case 'SELECTED_ITEM':
      return action.payload;
    }
    return state;
}
