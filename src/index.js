import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import combineReducers from "./reducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     //middleware code-curryingggg
//     return function (action) {
//       console.log("ACTION_TYPE=", action.type);
//       next(action);
//     };
//   };
// };
// const logger =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     //logger
//     if (typeof action !== "function") {
//       console.log("ACTION_TYPE=", action.type);
//       next(action);
//     }
//   };
// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     if (typeof action === "function") {
//       action(dispatch);
//       return;
//     }
//     next(action); //passing to reducers
//   };
const store = createStore(combineReducers, applyMiddleware(thunk));
// export const StoreContext = createContext();
// console.log("Store Context", StoreContext);
// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
