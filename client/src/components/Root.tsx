import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { ConnectedRouter } from 'connected-react-router'
import history from '../redux/store/history'
import routes from '../routes'
import NotFound from './NotFound'


export default function Root() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Router>
                    <Switch>
                        <Route exact path={routes.HOME} component={Home}/>
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Router>
            </ConnectedRouter>
        </Provider>
    )
}
