import React from 'react'
import { Switch, Route } from 'react-router-dom'

import routes from '@/data/routes'

const Root = () => (
    <Switch>
        {routes.map((route, index) => (
            <Route 
                key={index}
                exact={route.exact}
                component={route.component}
                path={route.path}
            />
        ))}
    </Switch>
)

export default Root