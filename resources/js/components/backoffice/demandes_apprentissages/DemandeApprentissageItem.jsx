import React, { Component } from 'react'
import moment from 'moment'

export default class DemandeApprentissageItem extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {

        const {item} = this.props
        const styl = {
          textDecoration: item.status == 2 ? 'line-through' : 'none'
        }
        return (
            <tr style={styl}>
            <td>{item.reference || 'Non renseigné'}</td>
            <td>{item.user ? item.user.name : 'Non renseigné'}</td>
            <td>{moment(item.date_proposee).format('DD/MM/YYYY') || 'Non Renseigné'}</td>
            <td>{item.heure_debut_reservation || 'Non renseigné'}</td>
            <td>{moment(item.date_fin_reservation).format('DD/MM/YYYY') || 'Non Renseigné'}</td>

            <td>{item.heure_fin_reservation || 'Non renseigné'}</td>
            <td>{item.type_utilisation || 'Non renseigné'}</td>
            <td>{item.lieu_utilisation || 'Non renseigné'}</td>
            <td>{item.coord_numero_tel || 'Non renseigné'}</td>
            <td>{item.user ? item.user.email : 'Non renseigné'}</td>

            <td >
                {item.status == 0 ? 
                <span>
                <div className="btn-group">
                  <button type="button" className="btn btn-warning btn-flat dropdown-toggle" data-toggle="dropdown">Encours</button>
                  {/*  
                  <button type="button" className="btn btn-warning btn-flat dropdown-toggle" data-toggle="dropdown">
                    <span className="caret"></span>
                    <span className="sr-only">Développez</span>
                  </button> */}
                  <ul className="dropdown-menu" role="menu">
                    <li onClick={this.props.handleStatusChange.bind(this, item.id, 1)}><a  href="#">Traitée</a></li>
                    <li onClick={this.props.handleStatusChange.bind(this, item.id, 2)}><a href="#">Bloquée</a></li>
                    
                  </ul>
                </div>
                </span>
                : item.status ==1 ? 
                <span>
                <div className="btn-group">
                  <button type="button" className="btn btn-success btn-flat dropdown-toggle" data-toggle="dropdown">Traitée</button>
                  {/* 
                  <button type="button" className="btn btn-success btn-flat dropdown-toggle" data-toggle="dropdown">
                    <span className="caret"></span>
                    <span className="sr-only">Développez</span>
                  </button> */}
                  <ul className="dropdown-menu" role="menu">
                    <li onClick={this.props.handleStatusChange.bind(this, item.id, 0)}><a href="#">En cours</a></li>
                    <li onClick={this.props.handleStatusChange.bind(this, item.id, 2)}><a href="#">Bloquée</a></li>
                    
                  </ul>
                </div>
                </span>
                 : 
                 <span>
                 <div className="btn-group">
                   <button type="button" className="btn btn-danger btn-flat dropdown-toggle" data-toggle="dropdown">Bloquée</button>
                  {/* 
                    <button type="button" className="btn btn-danger btn-flat dropdown-toggle" data-toggle="dropdown">
                     <span className="caret"></span>
                     <span className="sr-only">Développez</span>
                   </button> */}
                   <ul className="dropdown-menu" role="menu">
                     <li onClick={this.props.handleStatusChange.bind(this, item.id, 0)}><a href="#">En cours</a></li>
                     <li onClick={this.props.handleStatusChange.bind(this, item.id, 1)}><a href="#">Traitée</a></li>
                     
                   </ul>
                 </div>
                 </span>
                }
                </td>
               
            <td>
                <span title="Supprimer" onClick={this.props.onDelete.bind(this, item.id)} className="btn btn-danger"> <i className="fa fa-trash"></i> </span>
                </td>
          </tr>
        )
    }
}
