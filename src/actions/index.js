import { SET_AUTH, INCREMENT_COUNT_ACTION, ADD_RESSOURCE } from './action-types';
import axios from 'axios';
const BASE_URL = "http://localhost:3090"

export function incrementCountAction() {
    return { type: INCREMENT_COUNT_ACTION }
}


export function addRessource() {
    return { type: ADD_RESSOURCE }
}

export function signin({ email, password }, history) {
    return function (dispatch) {
        axios.post(`${BASE_URL}/signin`, {
            email, //  == email: email
            password // == password : password
        }).then((response) => {
            localStorage.setItem('token', response.data.token);
            dispatch({ type: SET_AUTH, payload: true });
            history.push('/ressources')
        }).catch((err) => {
            console.log("error");
        })
    }
}

export function signout(){
    return function(dispatch){
        dispatch({ type: SET_AUTH, payload: false });
        localStorage.removeItem('token');      
    }
}