import React, { Component } from 'react'
import { Field, reduxForm } from "redux-form"
import { connect } from 'react-redux'
import { signup as signupAction } from '../actions'
import { bindActionCreators } from 'redux'

const FIELDS = {
    email: 'email',
    password: 'password',
    secondPassword: 'secondPassword'
}

class Signup extends Component {

    handleSubmit = (credentials) => {
        this.props.signupAction(credentials, this.props.history);
    }

    // possibilite dans faire un component
    renderInputComponent = (field) => {
        return (
            <div className="row justify-content-md-center">
                <fieldset className="col-md-4 form-group">
                    <label htmlFor={field.id} className="bmd-label-floating">{field.label}</label>
                    <input {...field.input} id={field.id} type={field.type} className="form-control" />
                </fieldset>
            </div>
        );
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)} >
                <div className="row justify-content-md-center">
                    <h1>Inscription</h1>
                </div>
                <Field
                    name={FIELDS.email}
                    component={this.renderInputComponent}
                    type="email"
                    label="email"
                    id="inputEmail"

                />
                <Field
                    name={FIELDS.password}
                    component={this.renderInputComponent}
                    type="password"
                    label="Password"
                />
                <Field
                    name={FIELDS.secondPassword}
                    component={this.renderInputComponent}
                    type="password"
                    label="Password (again)"

                />

                <div className="row justify-content-md-center">
                    <button type="submit" className="btn btn-primary btn-raised">Connexion</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ signupAction }, dispatch),
})


const signupForm = reduxForm({
    form: 'signup',
    fields: Object.keys(FIELDS)
})(Signup)


export default connect(null, mapDispatchToProps)(signupForm)