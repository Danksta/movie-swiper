import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'

import authReducer from '../src/redux/store/reducer/auth'
import swipeReducer from '../src/redux/store/reducer/swipe'

import Application from './Application';
import { persistor, store } from './redux/store';

const rootReducer = combineReducers({
  Auth :authReducer,
  Swipe : swipeReducer
})
const store2  = createStore(rootReducer, applyMiddleware(ReduxThunk))

const AppContainer: React.FC = () => (
  <Provider store = {store2}>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Application />
    </PersistGate>
  </Provider>
  </Provider>
);

export default AppContainer;
