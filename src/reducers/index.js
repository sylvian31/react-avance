import { combineReducers } from "redux";
import AuthReducer from './auth-reducer'
import AcionInfoReducer from './action-info-reducer'

const rootReducer = combineReducers({
    authReducer: AuthReducer,
    actionInfoReducer: AcionInfoReducer
});

export default rootReducer;