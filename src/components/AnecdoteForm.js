import React from 'react'
// import { useDispatch } from 'react-redux'
import { connect } from 'react-redux' 
import {  createAnecdote } from '../reducers/anecdoteReducer' 
import { 
  createAnecdoteNotification
} from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  // const dispatch = useDispatch()

  const addAnecdote = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''

    props.createAnecdote(content)
    props.createAnecdoteNotification(content)
    setTimeout(() => { props.createAnecdoteNotification('') }, 5000);
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote"/>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default connect(
  null, 
  { createAnecdote, createAnecdoteNotification }
)(AnecdoteForm)

// export default AnecdoteForm