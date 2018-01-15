import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import currentItem from './currentItem';

 const rootReducer = combineReducers({
  Items: menuReducer,
  currentItem: currentItem
});

export default rootReducer;
