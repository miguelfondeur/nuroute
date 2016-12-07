// change this file
'use strict'

const express = require('express')
const port = 3000

const app = express()

app.get('/', function (req, res) {
  res.send('<h1>WOW!</h1>')
})

app.listen(port, function () {
  console.log('The frontend server is running on port 3000')
})

// require('babel-register')

// const express = require('express')
// const React = require('react')
// const ReactDOMServer = require('react-dom/server')
// const ReactRouter = require('react-router')
// const match = ReactRouter.match
// const RouterContext = ReactRouter.RouterContext
// const ReactRedux = require('react-redux')
// const Provider = ReactRedux.Provider
// const Store = require('./js/Store.jsx')
// const store = Store.store
// const _ = require('lodash')
// const fs = require('fs')
// const baseTemplate = fs.readFileSync('./index.html')
// const template = _.template(baseTemplate)
// const ClientApp = require('./js/ClientApp.jsx')
// const routes = ClientApp.Routes

// const app = express()

// app.use('/public', express.static('./public'))

// app.use((req, res) => {
//   match({ routes: routes, location: req.url }, (error, redirectLocation, renderProps) => {
//     if (error) {
//       res.status(500).send(error.message)
//     } else if (redirectLocation) {
//       res.redirect(302, redirectLocation.pathname + redirectLocation.search)
//     } else if (renderProps) {
//       const body = ReactDOMServer.renderToString(
//         React.createElement(Provider, {store},
//           React.createElement(RouterContext, renderProps)
//         )
//       )
//       res.status(200).send(template({body}))
//     } else {
//       res.status(404).send('Not found')
//     }
//   })
// })

// console.log('Express server listening on port ' + port)

