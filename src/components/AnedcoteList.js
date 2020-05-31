import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { 
  giveVote
} from '../reducers/anecdoteReducer'
import { 
  giveVoteNotification
} from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdoteReducer)
  const filter = useSelector(state => state.filterReducer)
  const dispatch = useDispatch()

  const vote = (id) => {
    const votedAnecdote = anecdotes.find(anecdote => anecdote.id === id)   
    dispatch(giveVote(id, votedAnecdote))
    dispatch(giveVoteNotification(votedAnecdote.content))
    setTimeout(() => { dispatch(giveVoteNotification('')) }, 5000);
  }

  const listFilter = (filterValue, list) => {
    const item = filterValue.toLowerCase();
    const updatedList = list.filter(name =>
      name.content.toLowerCase().includes(item, 0)
    );
    return updatedList
  };

  return (
    <div>
      {listFilter(filter, anecdotes).sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList