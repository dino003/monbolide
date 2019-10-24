const initialState = {
    items: [],
    loading: false,
    error: null
}

function DemandeVehiculeApprentissageReducer(state = initialState, action){
 
    let nextState

    switch (action.type) {
        case 'ADD_DEMANDE_VEHICULE':
          
            nextState = {
                ...state,
                items: [action.value, ...state.items]
            }
            return nextState || state

            case 'GET_DEMANDE_VEHICULE':
          
                    nextState = {
                        ...state,
                        items: action.value,
                        loading: false
                    }
                    return nextState || state

            case 'REMOVE_DEMANDE_VEHICULE': 
                    nextState = {
                        ...state,
                        items: state.items.filter(item => item.id !== action.value)
                    }
                    return nextState || state

            case 'EDIT_DEMANDE_VEHICULE':
                    nextState = {
                        ...state,
                        items: state.items.map(item => {
                            if (item.id === action.value.id) { 
                            let iEdit = action.value;
                             item =  {...iEdit}

                            }
                            return item;
                          })
                    } 
                    return nextState || state

                    case 'EDIT_STATUS_DEMANDE':
                        nextState = {
                            ...state,
                            items: state.items.map(item => {
                                if (item.id === action.value.id) { 
                                    item.status = action.value.status
    
                                }
                                return item;
                              })
                        } 
                        return nextState || state
        
      
        default:
         return state;
    }

}

export default DemandeVehiculeApprentissageReducer
