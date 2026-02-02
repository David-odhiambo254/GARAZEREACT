import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
import { registerInternalLinkHandler } from "./utils/clientRouting";

registerInternalLinkHandler();

createRoot(document.getElementById("root")).render(<App />);
