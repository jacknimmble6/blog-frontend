import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { devToolsEnhancer } from 'redux-devtools-extension'
import reducers from './reducers/index'
import { MyContextProvider } from './useContext';

const store = compose(applyMiddleware(thunk), devToolsEnhancer({ trace: true }))(createStore)(reducers)

ReactDOM.render(
  <MyContextProvider>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </MyContextProvider>,
  document.getElementById('root')
);
