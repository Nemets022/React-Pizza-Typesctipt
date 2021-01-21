import React from "react"
import { Categories, SortPopup, PizzaBlock, LoadingBlock } from "../component"
import { HomeToProps } from "../types"
import { useSelector } from "react-redux"


const Home: React.FC = () => {
    const { isLoading, items } = useSelector((state: HomeToProps) => state.pizzas)
    const { category } = useSelector(({ filters }: any) => {
        return {
            category: filters.category
        }
    })


    /*
         const onScroll = () => {
         console.log(window.scrollY);
         console.log(document.querySelector('.content')?.clientHeight);
         //@ts-ignore
         if (window.scrollY + 300 > document.querySelector('.content')?.clientHeight) {
             
         }
 
     }
     
     useEffect(() => {
         window.addEventListener('scroll', onScroll)
         return () => {
             window.removeEventListener('scroll', onScroll)
         }
     })
     */
    let pizzaTitle

    switch (category) {
        case 0:
            pizzaTitle = 'Мясные пиццы'
            break;
        case 1:
            pizzaTitle = 'Гриль'
            break;
        case 2:
            pizzaTitle = 'Острые пиццы'
            break;
        case 3:
            pizzaTitle = 'Вегетарианская'
            break;
        case 4:
            pizzaTitle = 'Закрытые пиццы'
            break;
        default:
            pizzaTitle = 'Все пиццы'
            break;
    }
    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <SortPopup />
            </div>
            <h2 className="content__title">{pizzaTitle}</h2>
            <div className="content__items">
                {
                    isLoading
                        ? items.map(item => <PizzaBlock key={item.id}{...item} />)
                        : Array(12).fill(0).map((_, index) => <LoadingBlock key={index} />)
                }
            </div>
        </div>
    )
}

export default Home