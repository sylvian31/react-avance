import {SET_AUTH} from './action-types'

export function setAuth(isLogged){
    return function (dispatch){
        dispatch({ type: SET_AUTH, payload: isLogged })
    }
}
