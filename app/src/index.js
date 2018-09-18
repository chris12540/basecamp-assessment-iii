import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";

import Layout from "./components/Layout.js";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Layout />, document.getElementById("root"));
registerServiceWorker();
