import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import todosReducer from "./services/reducer/todosReducer";
const store = createStore(todosReducer, applyMiddleware(thunk));

export default store;
