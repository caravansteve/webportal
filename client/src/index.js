import React from 'react'
import ReactDOM from 'react-dom'

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

const networkInterface = createNetworkInterface({
  uri: process.env.REACT_APP_SERVER_URL
})

const client = new ApolloClient({ networkInterface })

const rootComponent = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(rootComponent, document.getElementById('root'))
registerServiceWorker()
