import React from 'react'
import ReactDOM from 'react-dom/client'

import { CounterContextProvider } from '@/contexts/CounterContext'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <CounterContextProvider>
    <App />
  </CounterContextProvider>
)
