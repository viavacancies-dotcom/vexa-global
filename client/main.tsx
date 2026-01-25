import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element not found");
}

// Check if root was already created (for hot module reloading)
let root = (container as any).__root;

if (!root) {
  root = createRoot(container);
  (container as any).__root = root;
}

root.render(<App />);
