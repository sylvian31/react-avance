import { ADD_RESSOURCE } from '../actions/action-types'

const initalState = {
    ressourceList: [0]
}

export default function RessourceReducer(state = initalState, action) {

    switch (action.type) {
        case ADD_RESSOURCE:
            return {
                ressourceList:
                    [...state.ressourceList, state.ressourceList[state.ressourceList.length - 1] + 1]
            }
        default:
            return state;
    }
}