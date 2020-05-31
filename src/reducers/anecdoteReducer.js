import anecdoteService from '../services/anecdotes'

export const giveVote = (id, votedAnecdote) => {
  anecdoteService.addNewVote(votedAnecdote)
  return {
    type: 'ADD_VOTE',
    data: { id }
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'CREATE_ANECDOTE',
      data: newAnecdote,
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_ANECDOTE':
      return state.concat(action.data)
    case 'ADD_VOTE':
      const id = action.data.id
      const votedBlog = state.find(n => n.id === id)
      const blogToVote = { 
        ...votedBlog, 
        votes: votedBlog.votes + 1 
      }
      return state.map(blog =>
        blog.id !== id ? blog : blogToVote 
      )
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export default anecdoteReducer