import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundary";
import "./shared/config/i18n/i18n";
import App from "./app/App";
import "app/styles/index.scss";
import { StoreProvider } from "app/providers/StoreProvider";

const root = createRoot(document.getElementById("root"));

root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
);
