import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux"; 
import { Buffer } from "buffer"; 


import store from "./redux/store"; 


if (!window.Buffer) {
  window.Buffer = Buffer;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrap App with Provider to give access to Redux store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
