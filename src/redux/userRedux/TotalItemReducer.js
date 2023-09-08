const initialState = {
    netItem:[
    ]
    
}

export const TotalItemReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                netItem:[...state.netItem , action.payload]
            }
            case "REMOVE_ITEM":
                return {
                    ...state,
                    netItem: action.payload
                }
           
        default:
            return state
    }
};