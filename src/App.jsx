import React from 'react'

import Counter from '@/components/Counter'

import CounterContext from '@/contexts/CounterContext'
import './App.css'

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1
    case 'DEC':
      return state - 1
    case 'ZERO':
      return 0
    default:
      return state
  }
}

const App = () => {
  const [counter, counterDispatch] = React.useReducer(counterReducer, 0)

  return (
    <CounterContext.Provider value={[counter, counterDispatch]}>
      <div className="container">
        <main>
          <h1>Counter</h1>

          <Counter />
        </main>
      </div>
    </CounterContext.Provider>
  )
}

export default App
