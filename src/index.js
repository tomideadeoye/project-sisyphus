import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme.jsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { AppContextProvider } from "./utils/context";
import CssBaseline from "@mui/material/CssBaseline";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<AppContextProvider>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</AppContextProvider>
);
