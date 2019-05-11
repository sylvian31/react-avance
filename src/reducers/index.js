import { combineReducers } from "redux";
import AuthReducer from './auth-reducer'
import AcionInfoReducer from './action-info-reducer'
import RessourcesReducer from './ressources-reducer'
import ErrorsReducer from './errors-reducer'
import {reducer as form} from 'redux-form'

const rootReducer = combineReducers({
    form,
    authReducer: AuthReducer,
    actionInfoReducer: AcionInfoReducer,
    ressourcesReducer : RessourcesReducer,
    errorsReducer : ErrorsReducer
});

export default rootReducer;