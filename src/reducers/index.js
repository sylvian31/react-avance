import { combineReducers } from "redux";
import AuthReducer from './auth-reducer'

const rootReducer = combineReducers({
    authReducer: AuthReducer
});

export default rootReducer;