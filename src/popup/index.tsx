import { createRoot } from "react-dom/client";
import { App } from "./components/app";

import "./styles.scss";


const app = document.getElementById("app");
const root = createRoot(app);

root.render(<App />);
