import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes.jsx'

import store from './store.jsx'
import Home from './components/Home'

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);