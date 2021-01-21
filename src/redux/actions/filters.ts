export const setSortBy = (name: string) => ({
    type: 'SET_SORT_BY',
    payload: name
})

export const setCategory = (catIndex: number | null) => ({
    type: 'SET_CATEGORY',
    payload: catIndex
})
export const setLoaded = () => ({
    type: 'SET_LOADED',
})