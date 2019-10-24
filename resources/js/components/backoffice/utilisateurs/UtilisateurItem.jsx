import React, { Component } from 'react'
import moment from 'moment'

export default class UtilisateurItem extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const {item} = this.props

        return (
            <tr>
            <td>{item.name || 'Non renseigné'}</td>
           
            <td>{item.email || 'Non renseigné'}</td>
            <td>
                {item.isAdmin ? 
                <span title="Cliquez pour retirer le compte du groupe administrateurs" 
                className="btn label label-default" onClick={this.props.toggleAdmin.bind(this, item.id)}>
                    Oui
                </span>
                :  <span title="Cliquez pour ajouter le compte au groupe administrateurs"
                 className="btn label label-default" onClick={this.props.toggleAdmin.bind(this, item.id)}>
                    Non
                 </span>
               
                }
                </td>
            <td>{item.demandes_apprentissages_count > 0 ? item.demandes_apprentissages_count : 'Aucune'}</td>
            <td>{item.account_provider_facebook.length ? 
                item.account_provider_facebook[0].provider : item.account_provider_google.length ? 
                item.account_provider_google[0].provider : 'MonBolide.com'}</td>

           

            <td>
                {item.active ? 
                <span title="Cliquez pour désactiver le compte" className="btn label label-success" onClick={this.props.onChangeStatus.bind(this, item.id)}>
                    Actif
                </span>
                :  <span title="Cliquez pour activer le compte" className="btn label label-danger" onClick={this.props.onChangeStatus.bind(this, item.id)}>
                    Inactif
                 </span>
               
                }
                </td>
            
            <td>
                <span title={`Supprimer ${item.name}`} onClick={this.props.onDelete.bind(this, item.id)} className="btn btn-danger"> <i className="fa fa-trash"></i> </span>
                </td>
          </tr>
        )
    }
}
