import React from "react";
import App from "./components/App";
import "../src/styles.css";

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
