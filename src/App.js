import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import SideBar from "./components/SideBar/SideBar";

function App() {
	return (
		<Router>
			<div>
				<Navigation />
				<SideBar />
			</div>
		</Router>
	);
}

export default App;
