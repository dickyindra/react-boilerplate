import { gql } from 'apollo-boost'

const allUsers = gql`
    query allUsers {
        allUsers {
            id
            name
        }
    }
`

export default allUsers