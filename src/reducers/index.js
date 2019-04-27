import { combineReducers } from "redux";
import AuthReducer from './auth-reducer'
import AcionInfoReducer from './action-info-reducer'
import RessourcesReducer from './ressources-reducer'

const rootReducer = combineReducers({
    authReducer: AuthReducer,
    actionInfoReducer: AcionInfoReducer,
    ressourcesReducer : RessourcesReducer
});

export default rootReducer;