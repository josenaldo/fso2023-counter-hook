import React from 'react'

import Counter from '@/components/Counter'
import Display from '@/components/Display'
import './App.css'

/**
 * A React functional component that renders the main application layout with a title, a counter display, and a counter component.
 * @returns {JSX.Element} The rendered component.
 */
const App = () => {
  return (
    <div className="container">
      <main>
        <h1>Counter</h1>

        <Display />
        <Counter />
      </main>
    </div>
  )
}

export default App
