import React from 'react';
import { Provider } from 'react-redux'; //makes the Redux store available to any nested components that have been wrapped in the connect() function.
import { store } from '../store/index';
import { ConnectedDashboard } from './Dashboard';
import { Router, Route } from 'react-router-dom';
import { history } from '../store/history'; //this way connectedDashboard will appear only when the url says that
import { ConnectedNavigation } from './Navigation';
import { ConnectedTaskDetail } from './TaskDetail';
export const Main = () => (
    <Router history={history}>

        <Provider store={store}>
            <div>
                < ConnectedNavigation />
                {/* Dashboard goes here */}
                {/* <ConnectedDashboard /> */}
                <Route exact
                    path='/dashboard'
                    render={() => (<ConnectedDashboard />)}
                />
                <Route exact
                    path='/task/:id'
                    render={({ match }) => (<ConnectedTaskDetail match={match} />)}
                />
            </div>
        </Provider>
    </Router>
);

