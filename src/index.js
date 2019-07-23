import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Root from '@/components/root'
import client from '@/graphql/apollo'

const history = createBrowserHistory()

const App = () => (
    <ApolloProvider client={client}>
        <Router history={history}>
            <Root />
        </Router>
    </ApolloProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))