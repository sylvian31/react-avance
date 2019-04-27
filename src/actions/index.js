import { SET_AUTH, INCREMENT_COUNT_ACTION, ADD_RESSOURCE } from './action-types'

export function setAuth(isLogged) {
    return function (dispatch) {
        dispatch({ type: SET_AUTH, payload: isLogged });
    }
}

export function incrementCountAction() {
    return function (dispatch) {
        dispatch({ type: INCREMENT_COUNT_ACTION })
    }
}


export function addRessource() {
    return function (dispatch) {
        dispatch({ type: ADD_RESSOURCE })
    }
}