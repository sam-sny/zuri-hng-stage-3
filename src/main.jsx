import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { DataProvider } from "./context/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<DataProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/*" element={<App />} />
				</Routes>
			</BrowserRouter>
		</DataProvider>
	</AuthProvider>
);
