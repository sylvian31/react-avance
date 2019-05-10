import { combineReducers } from "redux";
import AuthReducer from './auth-reducer'
import AcionInfoReducer from './action-info-reducer'
import RessourcesReducer from './ressources-reducer'
import {reducer as form} from 'redux-form'

const rootReducer = combineReducers({
    form,
    authReducer: AuthReducer,
    actionInfoReducer: AcionInfoReducer,
    ressourcesReducer : RessourcesReducer
});

export default rootReducer;