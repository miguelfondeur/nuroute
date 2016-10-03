var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./components/MyTitle')

var div = React.DOM.div

var MyFirstComponent = (
  div(null,
    React.createElement(MyTitle, {title: 'This is a Prop!'}),
    React.createElement(MyTitle, {title: 'This is a Prop Brop!'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
