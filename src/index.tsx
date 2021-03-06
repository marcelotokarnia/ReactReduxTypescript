import 'tachyons/css/tachyons.min.css'
import './index.css'
import App from './App'
import configureStore from './store'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
