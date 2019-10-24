import React, { Component } from 'react'
import DemandeApprentissageItem from '../../../components/backoffice/demandes_apprentissages/DemandeApprentissageItem';
import {connect} from 'react-redux'
 class ListeDemandes extends Component {

      constructor(props) {
        super(props);
        
      }

      onDelete = (id) => {

        let conf = confirm('Voulez-vous vraiment supprimer ?')
        if(conf === true){
        
            const action = {type: "REMOVE_DEMANDE_VEHICULE", value: id}
            this.props.dispatch(action)
           axios.delete('/api/back/supprimer_demande_pour_apprentissage/' + id)
        }
       
    }

    handleStatusChange = ( id, status) => {
     // e.preventDefault()
      const val = {id: id, status: status}
      const action = {type: "EDIT_STATUS_DEMANDE", value: val}
      this.props.dispatch(action)
      axios.put('/api/back/modifier_demande_pour_apprentissage/' + id, {status: status})
    }

      renderList = () => {

        return (
          <table className="table table-hover">
          <thead>
              <tr>
            <th>Reférence</th>
            <th>Demandeur</th>
            <th>Date proposée</th>
            <th>Heure proposée</th>

            <th>Date fin réservation</th>
            <th>Heure fin proposée</th>

            <th>Type d'utilisation</th>
            <th>Lieu d'utilisation</th>
            <th>Contact</th>
            <th>Adresse email</th>
            <th>Status demande</th>

            </tr>
          </thead>
          <tbody>
          { this.props.demandes_vehicules_apprentissage.map((item) => 
         <DemandeApprentissageItem
          key={item.id} 
          onDelete={this.onDelete}
          handleStatusChange={this.handleStatusChange}
         item={item} />
          )  
    } 
      
          </tbody>
        </table>
        )
      }
      

    render() {
        return (
            <section className="content">

            <div className="row">
            <div className="col-xs-12"> 
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Gestion des demandes</h3>
    
                  <div className="box-tools">
                    <div className="input-group input-group-sm hidden-xs" style={{width: "150px"}}>
                      <input type="text" name="table_search" className="form-control pull-right" placeholder="Search" />
    
                      <div className="input-group-btn">
                        <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-body table-responsive no-padding">
                  {this.renderList()}
                </div>
              </div>
            </div>
          </div>
          </section>
        )
    }
}

const mapStateToProps = state => {
  return {
      demandes_vehicules_apprentissage: state.demandes_vehicules_apprentissage.items,
      
  }
}

export default connect(mapStateToProps)(ListeDemandes)
