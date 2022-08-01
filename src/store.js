import { createStore } from "redux";
import counterReducer from "./utilities/reducers/counterReducer";

// Creatintg store for redux and export
const store = createStore(counterReducer);

export default store;