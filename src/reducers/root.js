import { combineReducers } from 'redux';
import { photosReducer } from './pages'

export const rootReducer = combineReducers ({
    photo: photosReducer,
})
