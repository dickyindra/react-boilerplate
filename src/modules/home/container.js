import { compose } from 'recompose'
import { graphql } from 'react-apollo'

import allUsers from '@/graphql/api/queries/all-users'

const HomeContainer = compose(
    graphql(allUsers, { name: 'allUsers' })
)

export default HomeContainer