import React from 'react'
import Header from '../containers/header'
import { shallow, mount } from 'enzyme'
import { setAuth } from '../actions'
import { SET_AUTH, INCREMENT_COUNT_ACTION } from '../actions/action-types'
import AuthReducer from '../reducers/auth-reducer'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import { MemoryRouter } from 'react-router-dom'
import { actionCounter } from '../middlewares/action-counter'
import { incrementCountAction } from '../actions'
import RootTest from './root-test'

const createStoreWithMiddleware = applyMiddleware(thunk, actionCounter)(createStore);

describe("Test sur Header", () => {

    it("Render connected Header", () => {
        const wrapper = shallow(
            <RootTest>
                <Header />
            </RootTest>
        )

    });


    it("check if connexion button change", () => {
        const wrapper = mount(
            <RootTest>
                <Header />
            </RootTest>
        );
        const authLink = wrapper.find("#authLink");

        expect(authLink.text()).toEqual("Connexion")
        authLink.simulate("click");
        expect(authLink.text()).toEqual("Deconnexion")
    });

    it("test auth reducer", () => {
        const action = {type: SET_AUTH, payload: true}
        const initalState = {
            isLogged: false
        }
        expect(AuthReducer(initalState, action).isLogged).toEqual(true);
    })
});