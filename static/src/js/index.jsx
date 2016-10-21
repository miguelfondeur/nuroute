// Libs
const React = require('react')
const ReactDOM = require('react-dom')

const Landing = require('./components/Landing')
const Layout = require('./components/Layout')
const SearchResults = require('./components/SearchResults')

const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const AppWrapper = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
      <Route path='/results' component={SearchResults} />
    </Route>
  </Router>
)

ReactDOM.render(<AppWrapper />, document.getElementById('app'))
