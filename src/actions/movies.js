import * as api from '../api';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

// Action Creators - functions that return functions

export const getMovies = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMovies();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
    // const action = { type: 'FETCH_ALL', (note: data where we store movies) ---> payload: [] }   
}

export const createMovie = (movie) => async (dispatch) => {
    try {
        const { data } = await api.createMovie(movie);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateMovie = (id, movie) => async (dispatch) => {
    try {
        const { data } = await api.updateMovie(id, movie);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteMovie = (id) => async (dispatch) => {
    try {
        await api.deleteMovie(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const likeMovie = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeMovie(id);

        dispatch({ type: LIKE, payload: data });
    } catch (error) {
        console.log(error)
    }
}