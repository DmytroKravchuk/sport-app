import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import rootReducer from './redux/reducers/rootReducer';
import './index.css';
import App from './App';
import initialStore from './redux/initialStore';
import Routing from "./components/Routing";

const store = createStore(
    rootReducer,
    initialStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App>
            <Routing/>
        </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

