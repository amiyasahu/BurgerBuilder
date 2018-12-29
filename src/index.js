import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer);

const app = (
    <Provider store={store} >
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

registerServiceWorker();
