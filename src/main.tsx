import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Disable browser scroll restoration so page always starts at the top on refresh
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// Ensure page always starts at hero section on every load/refresh
// - Strips any hash anchor (e.g. #pricing) from the URL
// - Scrolls to the top of the page instantly
window.addEventListener("load", () => {
  if (window.location.hash) {
    // Remove hash from URL without creating a new history entry
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }
  window.scrollTo({ top: 0, behavior: "instant" });
});

createRoot(document.getElementById("root")!).render(<App />);

