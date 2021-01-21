import {IType} from "../../interfaces"
const initialState = {
    items: []
}

export const cart = (state = initialState, action: IType) => {
    switch (action.type) {
        case 'ADD_CART':
            return  {
                ...state,
                items: [...state.items, action.payload]
            }
        default:
            return state
    }
}