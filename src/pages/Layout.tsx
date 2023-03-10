import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/layout/NavBar";

function Layout() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ behavior: "auto", left: 0, top: 0 });
	}, [pathname]);

	return (
		<>
			<NavBar />
			<Container>
				<Outlet />
			</Container>
		</>
	);
}

export default Layout;

const Container = styled.main`
	padding: 0 9vw;
`;
