import {combineReducers} from 'redux'
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/IceCreamReducer";
import userReducer from "./Users/userReducer";
// const redux = require("redux");
// const combineReducer = redux.combineReducers;

export const rootReducer = combineReducers({
    cake: cakeReducer, 
    iceCream: iceCreamReducer,
    users: userReducer
  })
   