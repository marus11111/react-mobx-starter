import './entry.scss';

import React from 'react';
import {
  render
} from 'react-dom';
import {
  Router,
  Route
} from 'react-router';
import {
  createHistory,
  useBasename
} from 'history';
import {Provider} from 'mobx-react';
import Home from './js/components/Home.jsx';
import Component2 from './js/components/Component2.jsx';
import appStore from './js/stores/appStore.js'

const browserHistory = useBasename(createHistory)({ 
 // basename: '/project-folder-on-server' //to be used only in production 
});

setTimeout(() => {
  appStore.name = 'Marek'
}, 2000)

render(
  <Provider appStore={appStore}>
    <Router history={browserHistory}>
      <Route path='/' component={Home} />
      <Route path='/component2' component={Component2} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
