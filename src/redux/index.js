

import mainReducer from './mainReducer'
import {applyMiddleware, combineReducers, createStore } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk'

const rootReducer =combineReducers({
    main: mainReducer,
})
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
