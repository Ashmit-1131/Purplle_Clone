import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux'

import { reducer as AuthReducer } from './AuthRedux/reducer';
import thunk from 'redux-thunk'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({

  AuthReducer,


});

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
