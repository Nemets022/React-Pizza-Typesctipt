import React, { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCategory, setLoaded } from "../../redux/actions/filters"

const CATEGORY_PIZZA_NAMES = [
    'Мясные',
    'Гриль',
    'Острые',
    'Вегетарианская',
    'Закрытые'
]
type categorytoprops = {
    filters: {
        category: number | null
    }
}

export const Categories: React.FC = memo(() => {
    const category = useSelector(({ filters }: categorytoprops) => filters.category)
    const dispatch = useDispatch()

    const onSelectItem = (index: number | null) => {
        dispatch(setLoaded())
        dispatch(setCategory(index))
    }

    const renderLi = CATEGORY_PIZZA_NAMES.map((item, index) => (
        <li
            key={`${item}_${index}`}
            className={category === index ? 'active' : ''}
            onClick={() => onSelectItem(index)}
        >{item}</li>
    ))

    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => onSelectItem(null)}
                    className={category === null ? 'active' : ''}
                >Все</li>
                {renderLi}
            </ul>
        </div>
    )
})