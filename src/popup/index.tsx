import { createRoot } from "react-dom/client";
import { App } from "./components/app/app";

import "./styles.scss";

const app = document.getElementById("app");
const root = createRoot(app);

root.render(<App />);
