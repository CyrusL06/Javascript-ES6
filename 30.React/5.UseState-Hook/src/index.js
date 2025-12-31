import React from "react";
import "../src/styles.css"

import { createRoot } from "react-dom/client";
import App from "./components/App";


var count = 0;
var isPressed = true

const root = createRoot(document.getElementById("root"));
root.render(<App />);
