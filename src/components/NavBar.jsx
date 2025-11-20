import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // برای آیکون‌های همبرگری و بستن
import Button from "./Button";

function NavBar({ textColor = "text-white" }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		"Use Cases",
		"Banks",
		"Credit Unions",
		"Products",
		"Customers",
		"Resources",
		"Priceless Pricing™",
	];

	return (
		// <nav
		// 	className={`absolute top-3 flex items-center gap-8 py-0 px-6 z-50 w-full md:justify-items-start`}
		// >
		// 	{/* logo */}
		// 	<div className="relative w-24">
		// 		<img className="z-50" src="/logo.png" alt="logo" />
		// 		<div className="absolute -z-30 top-0 -right-2 rounded-br-2xl w-40 h-[60px] bg-white">
		// 			{/* داخلش یک دیو تیره میذاریم که گوشه بالا-چپش گرده */}
		// 			{/* این باعث میشه رنگ سفیدِ والد، فقط از اون گوشه گرد دیده بشه */}
		// 			<div className="w-10 h-full rounded-tl-[40px]"></div>
		// 		</div>
		// 	</div>

		// 	{/* list items */}
		// 	<ul className="md:flex hidden gap-10">
		// 		<li className="list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
		// 			<NavLink className={`lg:text-base text-[14px] ${textColor}`} to="#">
		// 				Use Cases
		// 			</NavLink>
		// 		</li>
		// 		<li className="list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
		// 			<NavLink className={`lg:text-base text-[14px] ${textColor}`} to="#">
		// 				Banks
		// 			</NavLink>
		// 		</li>
		// 		<li className="list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
		// 			<NavLink className={`lg:text-base text-[14px] ${textColor}`} to="#">
		// 				Credit Unions
		// 			</NavLink>
		// 		</li>
		// 		<li className="list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
		// 			<NavLink className={`lg:text-base text-[14px] ${textColor}`} to="#">
		// 				Products
		// 			</NavLink>
		// 		</li>
		// 		<li className="list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
		// 			<NavLink className={`lg:text-base text-[14px] ${textColor}`} to="#">
		// 				Customers
		// 			</NavLink>
		// 		</li>
		// 		<li className="list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
		// 			<NavLink className={`lg:text-base text-[14px] ${textColor}`} to="#">
		// 				Resources
		// 			</NavLink>
		// 		</li>
		// 		<li className="list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
		// 			<NavLink className={`lg:text-base text-[14px] ${textColor}`} to="#">
		// 				Priceless Pricing™
		// 			</NavLink>
		// 		</li>
		// 	</ul>
		// 	<Button
		// 		customClass={
		// 			"md:block hidden bg-lime-500 text-neutral-800 border-none px-4 py-2 font-bold hover:bg-neutral-800 hover:text-white hover:shadow hover:shadow-lime-400"
		// 		}
		// 	>
		// 		Get Started
		// 	</Button>

		// 	{/* mobile menu icon */}
		// 	<div
		// 		onClick={() => setIsOpen(!isOpen)}
		// 		className={`cursor-pointer md:hidden block ml-2.5 ${textColor}`}
		// 	>
		// 		<img src="/menu-icon.svg" alt="mobile icon" />
		// 	</div>
		// 	{/* mobile dropdown */}
		// 	<div
		// 		className={`${
		// 			isOpen ? "block" : "hidden"
		// 		} absolute right-8 top-14 w-80 rounded-[10px] overflow-hidden md:hidden left-6`}
		// 	>
		// 		<ul className="flex flex-col  bg-black/20 justify-center items-center p-3 gap-8">
		// 			<li className="list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
		// 				<NavLink className="text-base text-neutral-800 deconone" to="#">
		// 					Use Cases
		// 				</NavLink>
		// 			</li>
		// 			<li className="list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
		// 				<NavLink className="text-base text-neutral-800 deconone" to="#">
		// 					Banks
		// 				</NavLink>
		// 			</li>
		// 			<li className="list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
		// 				<NavLink className="text-base text-neutral-800 deconone" to="#">
		// 					Credit Unions
		// 				</NavLink>
		// 			</li>
		// 			<li className="flex items-center justify-center list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
		// 				<NavLink className="text-base text-neutral-800 deconone" to="#">
		// 					Products
		// 				</NavLink>
		// 			</li>
		// 			<li className="flex items-center justify-center list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
		// 				<NavLink className="text-base text-neutral-800 deconone" to="#">
		// 					Customers
		// 				</NavLink>
		// 			</li>
		// 			<li className="flex items-center justify-center list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
		// 				<NavLink className="text-base text-neutral-800 deconone" to="#">
		// 					Resources
		// 				</NavLink>
		// 			</li>
		// 			<li className="flex items-center justify-center list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
		// 				<NavLink className="text-base text-neutral-800 deconone" to="#">
		// 					Priceless Pricing™
		// 				</NavLink>
		// 			</li>
		// 		</ul>
		// 	</div>
		// </nav>

		// کانتینر اصلی هدر
		<header className="absolute w-full flex h-20 top-0 z-50">
			{/* --- بخش چپ: لوگو (زمینه سفید) --- */}
			<div className="flex items-center justify-center px-4 sm:px-8 bg-white rounded-br-2xl shrink-0">
				{/* محل قرارگیری لوگو */}
				<div className="w-24 h-auto">
					{/* سورس لوگو رو اینجا بذار */}
					<img
						src="/logo.png"
						alt="Glia Logo"
						className="w-full h-full object-contain text-purple-700" // استایل موقت
					/>
					{/* اگر فایل SVG داری مستقیماً بذار یا تگ img رو اصلاح کن */}
				</div>
			</div>

			{/* --- بخش راست: منو (زمینه تیره با قوس) --- */}
			{/* نکته مهم: rounded-tl-[40px] آن قوس سمت چپ نوار سیاه را ایجاد می‌کند */}
			<div className="flex-1 rounded-tl-[40px] flex items-center justify-between px-6 lg:px-12 relative">
				{/* دسکتاپ: لینک‌ها */}
				<nav
					className={`hidden xl:flex items-center gap-6 ${textColor} text-sm font-medium`}
				>
					{navItems.map((item, index) => (
						<a
							key={index}
							href="#"
							className="hover:text-[#7CE94C] transition-colors whitespace-nowrap"
						>
							{item}
						</a>
					))}
				</nav>

				{/* دسکتاپ: دکمه سمت راست */}
				<div className="hidden xl:block ml-auto">
					<Button>Get Started</Button>
				</div>

				{/* --- موبایل / تبلت: دکمه همبرگری --- */}
				<div className="xl:hidden flex items-center justify-end w-full">
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="text-white hover:text-[#7CE94C] transition"
					>
						{isMenuOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>

				{/* --- منوی باز شونده موبایل --- */}
				{isMenuOpen && (
					<div className="absolute top-full left-0 right-0 bg-white/70 p-6 rounded-b-2xl border-t border-gray-800 shadow-xl xl:hidden flex flex-col gap-6 items-center animate-fadeIn">
						{navItems.map((item, index) => (
							<a
								key={index}
								href="#"
								className="text-black text-lg hover:text-[#7CE94C] transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								{item}
							</a>
						))}
						<Button
							className="w-full max-w-xs mt-2"
							onClick={() => setIsMenuOpen(false)}
						>
							Get Started
						</Button>
					</div>
				)}
			</div>
		</header>
	);
}

export default NavBar;
