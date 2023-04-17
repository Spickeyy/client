import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (movies = [], action) => {
    switch (action.type) {
        case DELETE:
            return movies.filter((movie) => movie._id !== action.payload);
        case UPDATE:
        case LIKE:
            return movies.map((movie) => movie._id === action.payload._id ? action.payload : movie);
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [ ...movies, action.payload];
        default:
            return movies;
    }
}