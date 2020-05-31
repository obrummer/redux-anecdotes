import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    anecdoteReducer,
    notificationReducer,
    filterReducer
  })

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))


export default store