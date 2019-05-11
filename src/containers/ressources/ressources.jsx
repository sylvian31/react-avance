import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addRessource, getSecureRessources } from '../../actions/index'
import {
    getRessourceList,
    getContainOneList,
    getPrimeNumberList,
    getSpecialNumbersList,
    getRessourceMessage
} from './ressources-selector'

class Ressources extends Component {

    constructor(props) {
        super(props);
        this.props.getSecureRessources();
    }

    renderRessources = ressources => {
        return (
            ressources.map(ressource =>
                <li className="list-group-item" key={ressource}>{ressource}</li>
            )
        )
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <button
                        type="button"
                        onClick={() => this.props.addRessource()}
                        className="btn btn-primary"
                    >
                        Add
                    </button>
                </div>
                <div className="col">
                    <h4>Entiers</h4>
                    <ul className="list-group">
                        {this.renderRessources(this.props.ressourceList)}
                    </ul>
                </div>
                <div className="col">
                    <h4>Contienne "1"</h4>
                    <ul className="list-group">
                        {this.renderRessources(this.props.ressourceContainOneList)}
                    </ul>
                </div>
                <div className="col">
                    <h4>Entiers premiers</h4>
                    <ul className="list-group">
                        {this.renderRessources(this.props.ressourcePrimeNumberList)}
                    </ul>
                </div>
                <div className="col">
                    <h4>Entier premiers contenant "1"</h4>
                    <ul className="list-group">
                        {this.renderRessources(this.props.ressourceSpecialNumbersList)}
                    </ul>
                </div>
                {this.props.messageSecure}
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        ressourceList: getRessourceList(state),
        ressourceContainOneList: getContainOneList(state),
        ressourcePrimeNumberList: getPrimeNumberList(state),
        ressourceSpecialNumbersList: getSpecialNumbersList(state),
        messageSecure: getRessourceMessage(state)

    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ addRessource, getSecureRessources }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Ressources)