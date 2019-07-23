import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider, Query } from 'react-apollo'

import client from '@/graphql/apollo'
import allUsers from '@/graphql/api/queries/all-users'

const App = () => (
    <ApolloProvider client={client}>
        <p>Hello, World!</p>
        <Query query={allUsers}>
            {({ loading, error, data }) => {
                if (loading) return 'Loading...'
                if (error) return `Error! ${error.message}`

                return (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.allUsers.map((user, index) => (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            }}
        </Query>
    </ApolloProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))