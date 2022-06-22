import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import App from './components/App/App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import reducer from './services/reducers/index';
import thunk from "redux-thunk";
import { socketMiddleware } from './services/middleware/socket';
import { wsActionsUser } from './types/wsUser';
import { wsActions } from './types/ws';

export const WS_URL_ALL = 'wss://norma.nomoreparties.space/orders/all';
export const WS_URL_OWNER = 'wss://norma.nomoreparties.space/orders';

const middleware = applyMiddleware(thunk,
  socketMiddleware(WS_URL_OWNER, wsActionsUser, true),
  socketMiddleware(WS_URL_ALL, wsActions, false),
);
const store = createStore(reducer, middleware)



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
