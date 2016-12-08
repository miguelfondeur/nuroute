import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import Landing from '../../containers/Landing/Landing.jsx'

import './app.css'

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
  </Router>
)

ReactDOM.render(<App />, document.getElemtnById('root'))
