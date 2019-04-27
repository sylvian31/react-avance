import { createSelector } from 'reselect'
import lodash from 'lodash'

export const getRessourceList = state => {
    return state.ressourcesReducer.ressourceList
}

export const getContainOneList = state => {
    return getRessourceList(state).filter(r => r.toString().indexOf('1') > -1)
}

export const getPrimeNumberList = state => {
    return getRessourceList(state).filter(r => isPrimeNumber(r));
}


const isPrimeNumber = value => {
    for (var i = 2; i < value; i++) {
        if (value % i === 0) {
            return false
        }
    }
    return value > 1;
}

export const getSpecialNumbersList = createSelector(
    getContainOneList,
    getPrimeNumberList,
    (containOneList, primeNumberList) => {
        return lodash.intersection(containOneList, primeNumberList);
    }
)