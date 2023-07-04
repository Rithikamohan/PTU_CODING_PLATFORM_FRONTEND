import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './services/store';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<Provider store={store}>
   
    <App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
