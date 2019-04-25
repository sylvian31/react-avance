import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function (ChildComponent) {
    class RequireAuth extends Component {

        constructor(props) {
            super(props);
            if (!this.props.isLogged) {
                this.redirect();
            }
        }

        getSnapshotBeforeUpdate(prevProps, prevState){
            if (!this.props.isLogged) {
                this.redirect();
            }
            return {};
        }


        render() {
            return <ChildComponent />
        }

        componentDidUpdate(){

        }

        redirect = () => {
            this.props.history.push("/");
        }

    }
    const mapStateToProps = (state) => ({
        isLogged: state.authReducer.isLogged
    });

    return connect(mapStateToProps)(RequireAuth);
}
