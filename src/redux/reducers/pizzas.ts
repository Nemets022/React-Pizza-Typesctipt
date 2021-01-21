import {IType} from "../../interfaces";

const initialState = {
    items: [],
    isLoading: false
}

export const pizzas = (state = initialState, action: IType) => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return  {
                ...state,
                items: action.payload,
                isLoading: true
            }
        case 'SET_LOADED':
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }

}