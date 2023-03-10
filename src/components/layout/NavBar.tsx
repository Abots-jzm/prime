import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Paths } from "../../App";
import LogoPNG from "../../assets/Logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

function NavBar() {
	return (
		<Container>
			<Logo to={Paths.SHOP}>
				<img src={LogoPNG} alt="logo" />
			</Logo>
			<Nav>
				<NavLink to={Paths.SHOP}>SHOP</NavLink>
				<NavLink to={Paths.ABOUT}>ABOUT PRIME</NavLink>
				<NavLink to={Paths.WHERE}>WHERE TO BUY</NavLink>
			</Nav>
			<Right>
				<FaRegUserCircle />
				<FiSearch />
				<AiOutlineShoppingCart />
			</Right>
		</Container>
	);
}

export default NavBar;

const Right = styled.div`
	display: flex;
	align-items: center;
	gap: 2.6rem;
	color: black;
	font-size: 4rem;

	& > * {
		cursor: pointer;
	}
`;

const Logo = styled(Link)`
	text-decoration: none;
`;

const NavLink = styled(Link)`
	text-decoration: none;
	text-transform: capitalize;
	color: black;
	position: relative;

	&::after {
		position: absolute;
		content: "";
		bottom: -0.5em;
		display: block;
		width: 0;
		height: 2px;
		background-color: black;
		transition: width 0.3s;
	}

	&:hover::after {
		width: 100%;
	}
`;

const Nav = styled.nav`
	display: flex;
	align-items: center;
	gap: 3.6rem;
	font-family: "Open Sans", sans-serif;
	font-weight: 600;
	font-size: 2.4rem;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2.4rem 9vw;
	border-bottom: 1px solid #999999;
`;
