import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import './index.css';
import App from './App';
import initialStore from './redux/initialStore';

const store = createStore(
    rootReducer,
    initialStore
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

