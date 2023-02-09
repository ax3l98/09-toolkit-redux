import React from 'react'
import ReactDOM from 'react-dom/client'

// React Redux
import { Provider } from 'react-redux'
// Redux Store
import { store } from './store'

// Styles
import './index.css'

// Components
import App from './App'
import { PokemonApp } from './PokemonApp'
import { TodoApp } from './TodoApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      {/* <PokemonApp /> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>
)
