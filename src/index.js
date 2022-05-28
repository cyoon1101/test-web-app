import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { FavoritesContextProvider } from "./store/favorites-context";
import "./index.css";
import App from "./App";

/**
 * Where the web application is actually rendered
 */

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
