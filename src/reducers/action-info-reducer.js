import { INCREMENT_COUNT_ACTION } from '../actions/action-types'

const initalState = {
    actionCount : 0
}

export default function ActionInfoReducer(state = initalState, action) {

    switch (action.type) {
        case INCREMENT_COUNT_ACTION:
            return {
                actionCount: state.actionCount +1
            };
        default:
            return state;
    }
}