import { ADD_RESSOURCE, GET_RESSOURCE } from '../actions/action-types'

const initalState = {
    ressourceList: [0],
    message: ""
}

export default function RessourceReducer(state = initalState, action) {

    switch (action.type) {
        case ADD_RESSOURCE:
            return {
                ressourceList:
                    [...state.ressourceList, state.ressourceList[state.ressourceList.length - 1] + 1]
            };
        case GET_RESSOURCE:
            return {
                ...state,
                message: action.payload
            }

        default:
            return state;
    }
}