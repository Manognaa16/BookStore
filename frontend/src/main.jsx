import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthProviderr from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProviderr>
      <div className="dark:bg-slate-900 dark:text-white">
        <App />
      </div>
    </AuthProviderr>
  </BrowserRouter>
);
