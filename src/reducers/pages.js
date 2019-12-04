import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../actions/pagesAction';

const initialState = {
    period: 'years',
    photos: [],
    isFetching: false
}

export function photosReducer(state = initialState,action) {
    switch(action.type){
        case GET_PHOTOS_REQUEST:
            return {...state, period: action.payload, isFetching: true}
        case GET_PHOTOS_SUCCESS:
            return {...state, photos: action.payload, isFetching: false}
        default:
            return state;
    }
}
