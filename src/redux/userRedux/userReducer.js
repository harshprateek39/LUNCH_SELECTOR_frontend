const initialState = {
    totaluser:[
        {
            name:"Rahul",
            id:1,
            cart:[]
        },
       
    ],
    activeId:1
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
            case "ADD_CART":
                return {
                    ...state,
                    totaluser: state.totaluser.map((item) => item.id === action.payload.id ? { ...item, cart: [...item.cart, action.payload.cart] } : item)
                }
            case "REMOVE_CART":
                return{
                    ...state,
                    totaluser: state.totaluser.map((item) => item.id === action.payload.id ? { ...item, cart: item.cart.filter((item)=>item!==action.payload.cart) } : item)
                }
            case "SET_ACTIVE":
                return{
                    ...state, activeId:action.payload
                }
        default:
            return state
    }
};