import React from "react";
import App from "./components/App";
import "../src/style.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
