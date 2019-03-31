import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './app/components/App';

import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import store from './store';

const history = syncHistoryWithStore(createBrowserHistory(), store);

const router = (
<Provider store={store}>
  <Router history={history}>
    <Route path="/:filter?" component={App}></Route>
  </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));

serviceWorker.unregister();
