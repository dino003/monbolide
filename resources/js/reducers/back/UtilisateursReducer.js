const initialState = {
    items: [],
    loading: false,
    error: null
}

function UtilisateursReducer(state = initialState, action){
 
    let nextState

    switch (action.type) {
        case 'ADD_USER':
          
            nextState = {
                ...state,
                items: [action.value, ...state.items]
            }
            return nextState || state

            case 'GET_USER':
          
                    nextState = {
                        ...state,
                        items: action.value,
                        loading: false
                    }
                    return nextState || state

            case 'REMOVE_USER': 
                nextState = {
                    ...state,
                    items: state.items.filter(item => item.id !== action.value)
                    }
                    return nextState || state

            case 'EDIT_USER':
                    nextState = {
                        ...state,
                        items: state.items.map(item => {
                            if (item.id === action.value.id) { // value ici est id de l'item
                            let iEdit = action.value;
                             item =  {...iEdit}

                            }
                            return item;
                          })
                    } 
                    return nextState || state

                    case 'EDIT_USER_STATUS':
                        nextState = {
                            ...state,
                            items: state.items.map(item => {
                                if (item.id === action.value) { 
                                    item.active = !item.active
    
                                }
                                return item;
                              })
                        } 
                        return nextState || state

                        case 'TOGGLE_ADMIN':
                            nextState = {
                                ...state,
                                items: state.items.map(item => {
                                    if (item.id === action.value) { 
                                        item.isAdmin = !item.isAdmin
        
                                    }
                                    return item;
                                  })
                            } 
                            return nextState || state
        
      
        default:
         return state;
    }

}

export default UtilisateursReducer
