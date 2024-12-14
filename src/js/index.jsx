import { createRoot } from "react-dom/client";
import { API_KEY_MARVEL } from "./config/marvelApi.secrets";

const root = createRoot(document.getElementById("app"));

root.render(<h1>Hello World!</h1>)

