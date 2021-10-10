import { combineReducers } from 'redux';
import DetailsReducer from './DetailsReducer';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
    userDetails: DetailsReducer,
    libraries: LibraryReducer,
})