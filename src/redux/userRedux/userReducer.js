const initialState = {
    totaluser:[
        {
            name:"Rahul",
            id:1,
            cart:[]
        },
    ]
}

export const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                totaluser: [...state.totaluser, action.payload]
            }
            case "REMOVE_USER":
                return {
                    ...state,
                    totaluser: state.totaluser.filter((item) => item.id!== action.payload)
                }
        default:
            return state
    }
};