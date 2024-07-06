import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";
import {ThemeProvider} from "./app/providers/ThemeProvider";
import "./shared/config/i18n/i18n";
import App from "./app/App";

const root = createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>)

