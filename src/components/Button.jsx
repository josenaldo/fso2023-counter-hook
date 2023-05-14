import { useCounterDispatch } from '@/contexts/CounterContext'

const Button = ({ type, text, className }) => {
  const dispatch = useCounterDispatch()

  return (
    <button className={className} onClick={() => dispatch({ type: type })}>
      {text}
    </button>
  )
}

export default Button
