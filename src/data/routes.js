import Users from '@/modules/users'
import AddUser from '@/modules/add-user'

const routes = [
    {
        exact: true,
        component: Users,
        path: '/'
    },
    {
        exact: true,
        component: AddUser,
        path: '/add'
    }
]

export default routes