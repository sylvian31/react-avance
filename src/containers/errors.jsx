import React, { Component } from 'react'
import { connect } from 'react-redux'
import { parseError, resetError } from '../actions'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'

class Errors extends Component {


    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (this.props.location !== prevProps.location) {
            this.props.resetError();
        }
        return {};
    }


    render() {
        return (
            this.props.error &&
            <div className="alert alert-danger" role="alert">
                {this.props.error}
            </div>
        )
    }

    componentDidUpdate() {

    }
}

const mapStateToProps = (state) => {
    return {
        error: state.errorsReducer.message
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ parseError, resetError }, dispatch),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Errors))