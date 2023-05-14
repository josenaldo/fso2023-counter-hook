import Button from '@/components/Button'

import './Counter.css'

/**
 * A React functional component that renders a counter with buttons to increment, decrement, or reset the count.
 * @returns {JSX.Element} The rendered component.
 */
const Counter = () => {
  return (
    <article>
      <div className="grid">
        <Button type="DEC" text="-" className="danger" />
        <Button type="ZERO" text="0" className="info" />
        <Button type="INC" text="+" className="success" />
      </div>
    </article>
  )
}

export default Counter
