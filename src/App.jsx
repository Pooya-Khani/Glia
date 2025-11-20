import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./components/AppLayout";

import Home from "./pages/Home";
import News from "./pages/News";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import UsaFreeTradeZonesOrganization from "./pages/UsaFreeTradeZonesOrganization";
import FreeTradeZonesClub from "./pages/FreeTradeZonesClub";
import ContactUs from "./pages/ContactUs";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AppLayout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<AboutUs />} />
					<Route path="news" element={<News />} />
					<Route path="services" element={<Services />} />
					<Route path="contact" element={<ContactUs />} />
					<Route
						path="usa-free-trade-zones-organization"
						element={<UsaFreeTradeZonesOrganization />}
					/>
					<Route
						path="free-trade-zones-club"
						element={<FreeTradeZonesClub />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
