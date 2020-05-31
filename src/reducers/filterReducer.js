const initialState = ''

export const filterAnecdote = (content) => {
  return {
    type: 'FILTER_ANECDOTE',
    data: { content }
  }
}

  
const filterReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'FILTER_ANECDOTE':
        state = action.data.content
        return state
      default:
        return state
    }
}
  
export default filterReducer