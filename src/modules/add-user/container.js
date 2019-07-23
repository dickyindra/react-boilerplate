import { compose, withState, withHandlers } from 'recompose'
import { graphql } from 'react-apollo'

import createUser from '@/graphql/api/mutations/create-user'

const AddUserContainer = compose(
    withState('name', 'setName', ''),
    withState('isLoading', 'setLoading', false),
    withState('isSuccess', 'setSuccess', false),
    withState('error', 'setError', null),
    graphql(createUser, { name: 'createUser' }),
    withHandlers({
        handleSave: props => async () => {
            try {
                props.setLoading(true)
                props.setSuccess(false)
                props.setError(null)

                await props.createUser({
                    variables: {
                        name: props.name
                    }
                })

                props.setLoading(false)
                props.setSuccess(true)
                props.setName('')
            } catch(e) {
                props.setLoading(false)
                props.setError(e.message)
            }
        }
    })
)

export default AddUserContainer