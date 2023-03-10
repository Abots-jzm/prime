import React from "react";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Layout from "./pages/Layout";
import About from "./pages/About";
import WhereToBuy from "./pages/WhereToBuy";

export enum Paths {
	SHOP = "/",
	ABOUT = "about",
	WHERE = "where-to-buy",
}

function App() {
	return (
		<Routes>
			<Route path={Paths.SHOP} element={<Layout />}>
				<Route index element={<Shop />} />
				<Route path={Paths.ABOUT} element={<About />} />
				<Route path={Paths.WHERE} element={<WhereToBuy />} />
			</Route>
		</Routes>
	);
}

export default App;
