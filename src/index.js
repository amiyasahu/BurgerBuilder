import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducers/reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const logger = store => {
    return next => {
        return action => {
            console.log("[Middleware]:: Dispatching", action);
            const result = next(action);
            console.log("[Middleware]:: next state", store.getState());
            return result;
        }
    };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));

const app = (
    <Provider store={store} >
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

registerServiceWorker();
