import { Header, NavItem } from "./Header.styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const NavMenu = () => {
	return (
		<div>
			<Header>
				<NavItem to="/">Main</NavItem>
				<NavItem to="news">News</NavItem>
			</Header>
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet />
			</Suspense>
		</div>
	);
};
