import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from '../components/todo-app'
import { shallow } from 'enzyme'

describe("Test TodoApp fonctionnement", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<TodoApp />)
    });

    afterEach(() => {
        wrapper.unmount();
    });


    it("render le composant App sans erreur", () => {
        const div = document.createElement('div');
        ReactDOM.render(<TodoApp />, div); // le render fait que ce n'est pas un TU
    });

    it("Contient la string 'Nouvelle tâche'", () => {
        const div = document.createElement('div');
        ReactDOM.render(<TodoApp />, div);
        expect(div.innerHTML).toContain("Nouvelle tâche")
    });

    it("render le composant App sans erreur (shallow)", () => {
        expect(wrapper.html()).toContain("Nouvelle tâche")
    });

    it("Possede 2 classes CSS 'row'", () => {
        expect(wrapper.find('.row').length).toEqual(2)
    });

    it("Possede 1 ID  'addButton'", () => {
        expect(wrapper.find('#addButton').length).toEqual(1)
    });

    it("Change value de l'input ", () => {
        wrapper.find('input').simulate("change", {
            target: {
                value: "yo"
            }
        })
        expect(wrapper.find("input").prop("value")).toEqual("yo");
    });

    it("Saisie une value in input, click and check if text in list", () => {
        wrapper.find('input').simulate("change", {
            target: {
                value: "yo"
            }
        });
        wrapper.find('button').simulate("click");
        expect(wrapper.find(".list-group-item").text()).toContain("yo");
    });


});