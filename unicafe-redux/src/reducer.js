const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOOD':
      const good = state.good + 1
      const addedGood = { ...state, good }
      return addedGood
    case 'OK':
      const ok = state.ok + 1
      const addedOk = { ...state, ok }
      return addedOk
    case 'BAD':
      const bad = state.bad + 1
      const addedBad = { ...state, bad }
      return addedBad
    case 'ZERO':
      return initialState
    default: return state
  }
  
}

export default counterReducer