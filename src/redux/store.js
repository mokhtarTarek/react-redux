import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer} from "./rootReducer";
import logger from 'redux-logger'
//logger middleWare traking actions in the console

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))
export default store