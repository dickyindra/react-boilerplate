import React from 'react'
import { Query } from 'react-apollo'

import allUsers from '@/graphql/api/queries/all-users'

const Home = () => (
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
)

export default Home