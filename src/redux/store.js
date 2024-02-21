import { legacy_createStore } from "redux";
import Reducer_function from "./reducer";
const store=legacy_createStore(Reducer_function);
export default store;