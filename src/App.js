import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Navigation from "./Containers/Navigation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />

        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
