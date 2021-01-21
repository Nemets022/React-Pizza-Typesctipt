import {IType} from "../../interfaces";

const initialState = {
    category: null,
    sortBy: 'popular',
}

export const filters = (state = initialState, action: IType) => {
    switch (action.type) {
        case 'SET_SORT_BY':
            return  {
                ...state,
                sortBy: action.payload
            }
            case 'SET_CATEGORY':
                return {
                    ...state,
                    category: action.payload
                }
        default:
            return state
    }

}