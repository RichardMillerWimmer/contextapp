export const bookReducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_BOOK':
            return [...state, action.payload]
        case 'REMOVE_BOOK':
            return [state.filter(book => book !== action.payload)]
        default:
            return state
    }
}