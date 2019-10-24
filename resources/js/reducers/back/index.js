import {combineReducers} from 'redux'
import DemandeVehiculeApprentissageReducer from './DemandeVehiculeApprentissageReducer'
import UtilisateursReducer from './UtilisateursReducer'


const allReducers = combineReducers({
    demandes_vehicules_apprentissage: DemandeVehiculeApprentissageReducer,
    utilisateurs: UtilisateursReducer

})


export default allReducers