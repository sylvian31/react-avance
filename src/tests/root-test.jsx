import React, { Component } from 'react'
import Header from '../containers/header'
import { shallow, mount } from 'enzyme'
import { setAuth } from '../actions'
import { SET_AUTH } from '../actions/action-types'
import AuthReducer from '../reducers/auth-reducer'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import { MemoryRouter } from 'react-router-dom'
import { actionCounter } from '../middlewares/action-counter'

const createStoreWithMiddleware = applyMiddleware(thunk, actionCounter)(createStore);
const store=createStoreWithMiddleware(reducers);

export default class RootTest extends Component {
    render(){
        return(
            <Provider
                store={store}
            >
                <MemoryRouter>
                    {this.props.children}
                </MemoryRouter>
            </Provider>
        )
    }
}