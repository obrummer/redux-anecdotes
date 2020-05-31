  
const initialState = ''

export const giveVoteNotification = (id) => {
  return {
    type: 'ADD_VOTE_NOTIFICATION',
    data: { id }
  }
}

export const createAnecdoteNotification = (id) => {
  return {
    type: 'CREATE_ANECDOTE_NOTIFICATION',
    data: { id }
  }
}

  
const notificationReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'ADD_VOTE_NOTIFICATION':
        state = `You voted ${action.data.id}`
        return state
      case 'CREATE_ANECDOTE_NOTIFICATION':
        state = `You created ${action.data.id}`
        return state
      default:
        return state
    }
}
  
export default notificationReducer