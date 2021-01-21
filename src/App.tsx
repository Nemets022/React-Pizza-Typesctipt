import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header } from './component'
import { Home, Cart, ErrorUrl } from "./pages"
import { fetchPizzas } from './redux/actions/pizzas'
import { useDispatch, useSelector } from 'react-redux'
import { IFilterState } from './interfaces'

const App: React.FC = () => {
    
    const dispatch = useDispatch()
    const {category, sortBy} = useSelector(({filters}: IFilterState) => {
        return {
        category:  filters.category,
        sortBy: filters.sortBy
        }
    })
    
    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy));
    }, [dispatch, category, sortBy])

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/cart' component={Cart} />
                    <Route path='*' component={ErrorUrl} />
                </Switch>
            </div>
        </div>
    )
}

export default App