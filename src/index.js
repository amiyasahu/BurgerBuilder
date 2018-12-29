import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


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

const store = createStore(reducer, applyMiddleware(logger));

const app = (
    <Provider store={store} >
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

registerServiceWorker();
