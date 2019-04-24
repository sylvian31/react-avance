import { SET_AUTH } from '../actions/action-types'

const initalState = {
    isLogged: false
}

export default function AuthReducer(state = initalState, action) {

    switch (action.type) {
        case SET_AUTH:
            return {
                isLogged: action.payload
            };
        default:
            return state;
    }
}