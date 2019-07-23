import React from 'react'
import { Query } from 'react-apollo'

import HomeContainer from '@/modules/home/container'

const Home = (props) => {
    if (props.allUsers.loading) {
        return (
            <h5>Loading...</h5>
        )
    }

    if (props.allUsers.error) {
        return (
            <h5>Error: {props.allUsers.error.message}</h5>
        )
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {props.allUsers.allUsers.map((user, index) => (
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default HomeContainer(Home)