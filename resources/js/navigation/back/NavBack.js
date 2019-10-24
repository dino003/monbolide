import React from 'react';
import { Switch } from 'react-router-dom';

import Master from '../../components/layouts/back/Master'


import Error from  '../../components/Error'
//      <Route  component={Error} />
import ListeDemandes from '../../pages/backoffice/demandes_apprentissages/ListeDemandes'
import ListeUtilisateurs from '../../pages/backoffice/utilisateurs/ListeUtilisateurs';
import Milieu from '../../components/layouts/back/Milieu';



const NavBack = () => (
  <Switch>
      <Master exact path="/v1/admin_area/gestion-des-utilisateurs" component={ListeUtilisateurs} />
      <Master exact path="/v1/admin_area/gestion-des-demandes" component={ListeDemandes} />
      <Master exact path="/v1/admin_area/dashboard" component={Milieu} />


  </Switch>
)

export default NavBack;