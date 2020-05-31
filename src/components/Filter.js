import React from 'react'
import { useDispatch } from 'react-redux'
import { filterAnecdote } from '../reducers/filterReducer' 

const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (e) => {
    e.preventDefault()
    const content = e.target.value
    dispatch(filterAnecdote(content))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter