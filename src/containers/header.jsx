import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { signout as signoutAction } from '../actions'
import { bindActionCreators } from 'redux'

class Header extends Component {



    renderAuthLink = () => {
        if (this.props.isLogged) {
            return (
                < li className="nav-item" >
                    <Link className="nav-link" onClick={this.handleClickSignout} to={"/"}>Deconnexion</Link>
                </li >
            )
        } else {
            return [
                < li key={1} className="nav-item" >
                    <Link className="nav-link" to={"/signin"}>Connexion</Link>
                </li >,
                < li key={2} className="nav-item" >
                    <Link className="nav-link" to={"/signup"}>Inscription</Link>
                </li >
            ]
        }
    }

    handleClickSignout = () => {
        this.props.signoutAction();
    }

    render() {
        return (
            <div>
                <ul className="nav nav-tabs bg-primary">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/"}>Accueil</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/ressources"}>Ressources</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/todo-app"}>Todo App</Link>
                    </li>
                    {this.renderAuthLink()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.authReducer.isLogged
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ signoutAction }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)