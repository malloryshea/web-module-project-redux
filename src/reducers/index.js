import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer'

const reducer = combineReducers({
    movieState:movieReducer,
    favoritesState:favoritesReducer
})

export default reducer;