import { perrito as PerritoTypes } from '../constants/actionTypes';

export const setLoading = (loading) => async (dispatch) => {
    dispatch({
        type: PerritoTypes.LOADING,
        payload: loading,
    })
}

export const setList = (list) => async (dispatch) => {
    dispatch({
        type: PerritoTypes.SET_LIST,
        payload: list,
    })
}

export const setSelectedDog = (dog) => async (dispatch) => {
    dispatch({
        type: PerritoTypes.SET_SELECTED_PERRITO,
        payload: dog,
    })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    setLoading,
    setList,
    setSelectedDog,
}