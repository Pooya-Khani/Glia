import NavBar from "./NavBar";
import Footer from "./Footer";

import { Outlet, useLocation } from "react-router-dom";

function AppLayout() {
	const { pathname } = useLocation();

	// decide the class based on route
	const navTextColor =
		pathname === "/services" || pathname === "/free-trade-zones-club"
			? "text-black"
			: "text-white";

	return (
		<>
			<NavBar textColor={navTextColor} />
			<main>
				<div className="flex flex-col max-w-480 overflow-x-hidden">
					<Outlet />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default AppLayout;
