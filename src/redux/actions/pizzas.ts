import { IPizza } from "../../interfaces"
import axios from 'axios'



export const fetchPizzas = (category: number, sort: 'price' | 'alphabet' | 'popular') => (dispatch: any) => {
    const setCategory = category !== null ? `category=${category}`: ''
    let setSortBy
    switch (sort) {
        case 'price':
            setSortBy = `&_sort=price&_order=desc`
            break;
        case 'alphabet':
            setSortBy = `&_sort=name&_order=asc`
            break;
        default:
            setSortBy = `&_sort=rating&_order=desc`
    }
    axios.get(`http://localhost:3001/pizzas?${setCategory}${setSortBy}`)
    .then(({ data }) => {
        dispatch(setPizzas(data))
    })
    .catch(err => console.log(err))
}

export const setPizzas = (items: IPizza[]) => ({
    type: 'SET_PIZZAS',
    payload: items
})