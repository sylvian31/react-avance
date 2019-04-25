import { incrementCountAction } from '../actions'
import { INCREMENT_COUNT_ACTION } from '../actions/action-types'

export const actionCounter = store => next => action => {
    if (action.type !== INCREMENT_COUNT_ACTION) {
        store.dispatch(incrementCountAction());
    }
    next(action); //toujours faire le next sinon il se bloque !!!!!
};
