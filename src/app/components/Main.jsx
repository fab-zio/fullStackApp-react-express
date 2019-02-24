import React from 'react';
import { Provider } from 'react-redux'; //makes the Redux store available to any nested components that have been wrapped in the connect() function.
import { store } from '../store/index';
import { ConnectedDashboard } from './Dashboard'

export const Main = () => (
    <Provider store={store}>
        <div>
            {/* Dashboard goes here */}
            <ConnectedDashboard />
        </div>
    </Provider>
);

