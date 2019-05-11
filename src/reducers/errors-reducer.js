import { PARSE_ERROR, RESET_ERROR } from '../actions/action-types'

const initalState = {
    message: ""
}

export default function ErrorsReducer(state = initalState, action) {

    switch (action.type) {
        case PARSE_ERROR:
            return {
                message: action.payload
            };
        case RESET_ERROR:
            return {
                message: ""
            };
        default:
            return state;
    }
}