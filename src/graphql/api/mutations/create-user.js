import { gql } from 'apollo-boost'

const createUser = gql`
    mutation createUser($name: String!) {
        createUser(name: $name) {
            id
        }
    }
`

export default createUser