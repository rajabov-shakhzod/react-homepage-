import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import store from './store/index'
import { Provider, useSelector } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
       <Provider store={store}>
         <App />
       </Provider>
   
  </React.StrictMode>
);
