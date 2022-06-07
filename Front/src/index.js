import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Store } from "./store/store";
import { createContext } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = new Store();
export const Context = createContext({
  store,
});

root.render(
  <React.StrictMode>
   
      <BrowserRouter>
        <Context.Provider value={{ store }}>
          <App />
        </Context.Provider>
      </BrowserRouter>
 
  </React.StrictMode>
);
