import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Header extends Component {


    onClickAuth = () => {
        this.props.setAuth(!this.props.isLogged);
    };

    renderAuthLabel = () => {
        if (this.props.isLogged) {
            return "Deconnexion";
        } else {
            return "Connexion"
        }
    }

    render() {
        return (
            <div>
                <ul className="nav nav-tabs bg-primary">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Acceuil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Ressources</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                            href="#"
                            onClick={this.onClickAuth}
                        >
                            {this.renderAuthLabel()}
                        </a>
                    </li>
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

export default connect(mapStateToProps, actions)(Header)