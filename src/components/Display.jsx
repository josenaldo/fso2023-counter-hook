import { useCounterValue } from '@/contexts/CounterContext'

/**
 * A React functional component that renders the current count from the CounterContext.
 * @returns {JSX.Element} The rendered component.
 */
const Display = () => {
  const counter = useCounterValue()

  return <div className="count">{counter ? counter : 0}</div>
}

export default Display
