import React, { Component } from 'react'
import {connect} from 'react-redux'
import UtilisateurItem from '../../../components/backoffice/utilisateurs/UtilisateurItem'
 class ListeUtilisateurs extends Component {
  renderList = () => {

    return (
      <table className="table table-hover">
      <thead>
          <tr>
        <th>Nom</th>
        <th>Adresse email</th>
        <th>Admin</th>

        <th>Nombre de demandes</th>
        <th>Origine du compte</th>

        <th>Status</th>

        </tr>
      </thead>
      <tbody>
      { this.props.utilisateurs.map((item) => 
     <UtilisateurItem
     onDelete={this.onDelete}
     onChangeStatus={this.onChangeStatus}
     toggleAdmin={this.toggleAdmin}
      key={item.id} 
     item={item} />
      )  
} 
  
      </tbody>
    </table>
    )
  }

  onDelete = id => {

    let conf = confirm('Voulez-vous vraiment supprimer ?')
    if(conf === true){
    
        const action = {type: "REMOVE_DEMANDE_VEHICULE", value: id}
        this.props.dispatch(action)
       axios.delete('/api/back/supprimer_demande_pour_apprentissage/' + id)
    }
   
}

  onChangeStatus = id => {
    const action = {type: "EDIT_USER_STATUS", value: id}
        this.props.dispatch(action)
       axios.get('/api/back/modifier_user_status/' + id)
  }

  toggleAdmin = id => {
    const action = {type: "TOGGLE_ADMIN", value: id}
        this.props.dispatch(action)
       axios.get('/api/back/toggle_admin/' + id)
  }
  

render() {
    return (
        <section className="content">

        <div className="row">
        <div className="col-xs-12"> 
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Gestion des Utilisateurs</h3>

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
      utilisateurs: state.utilisateurs.items,
      
  }
}

export default connect(mapStateToProps)(ListeUtilisateurs)