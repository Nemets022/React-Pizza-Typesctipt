export interface IPizza {
    id: number
    imageUrl: string
    name: string
    types: number[]
    sizes: number[]
    price: number
    category: number
    rating: number
}

export interface ICart {
    id: number
    image: string
    name: string
    types: number
    sizes: number
    price: number
}

export interface IFilter {
    category: number
    sortBy: 'popular' | 'price' | 'alphabet'
}

export interface IFilterState {
    filters: IFilter
}

export interface IType {
    type: string,
    payload?: any
}

export interface SortPopupToProps {
    category: string
    type: string
}