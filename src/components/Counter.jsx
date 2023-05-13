import { useContext } from 'react'
import CounterContext from '@/contexts/CounterContext'

import './Counter.css'

/**
 * A counter component that increments and decrements a number
 * @function
 * @returns {JSX.Element} - The Counter component
 */
const Counter = () => {
  const [counter, dispatch] = useContext(CounterContext)

  return (
    <article>
      <div className="count">{counter ? counter : 0}</div>
      <div className="grid">
        <button className="danger" onClick={() => dispatch({ type: 'DEC' })}>
          -
        </button>
        <button className="info" onClick={() => dispatch({ type: 'ZERO' })}>
          0
        </button>
        <button className="success" onClick={() => dispatch({ type: 'INC' })}>
          +
        </button>
      </div>
    </article>
  )
}

export default Counter
