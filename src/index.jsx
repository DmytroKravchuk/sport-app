import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import rootReducer from './redux/reducers/rootReducer';
import './index.css';
import App from './App';
import initialStore from './redux/initialStore';
import StartPage from './components/StartPage';

const store = createStore(
    rootReducer,
    initialStore
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={StartPage}/>
            </Switch>
        </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

