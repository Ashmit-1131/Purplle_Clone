import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux'

import { reducer as AuthReducer } from './AuthRedux/reducer';
import { CartReducer, CartUpdateReducer } from './CartRedux/cart_Reducer';
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({

  AuthReducer,
  CartReducer,
  CartUpdateReducer
});

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
