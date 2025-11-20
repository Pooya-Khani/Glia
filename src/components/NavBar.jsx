import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

function NavBar({ textColor = "text-white", bgColor = "" }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav
			className={`absolute top-3 flex items-center gap-8 py-0 px-6 z-50 w-full md:justify-items-start ${bgColor}`}
		>
			{/* logo */}
			<div className="relative w-24">
				<img className="z-50" src="/logo.png" alt="logo" />
				<div className="absolute -z-30 top-0 -right-2 rounded-br-2xl w-40 h-[60px] bg-white">
					{/* داخلش یک دیو تیره میذاریم که گوشه بالا-چپش گرده */}
					{/* این باعث میشه رنگ سفیدِ والد، فقط از اون گوشه گرد دیده بشه */}
					<div className="w-10 h-full rounded-tl-[40px]"></div>
				</div>
			</div>

			{/* list items */}
			<ul className="md:flex hidden gap-10">
				<li className="list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
					<NavLink className={`lg:text-base text-[14px] ${textColor}`} to="#">
						Use Cases
					</NavLink>
				</li>
				<li className="list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
					<NavLink className={`lg:text-base text-[14px] ${textColor}`} to="#">
						Banks
					</NavLink>
				</li>
				<li className="list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
					<NavLink className={`lg:text-base text-[14px] ${textColor}`} to="#">
						Credit Unions
					</NavLink>
				</li>
				<li className="list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
					<NavLink className={`lg:text-base text-[14px] ${textColor}`} to="#">
						Products
					</NavLink>
				</li>
				<li className="list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
					<NavLink className={`lg:text-base text-[14px] ${textColor}`} to="#">
						Customers
					</NavLink>
				</li>
				<li className="list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
					<NavLink className={`lg:text-base text-[14px] ${textColor}`} to="#">
						Resources
					</NavLink>
				</li>
				<li className="list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
					<NavLink className={`lg:text-base text-[14px] ${textColor}`} to="#">
						Priceless Pricing™
					</NavLink>
				</li>
			</ul>
			<Button
				customClass={
					"md:block hidden bg-lime-500 text-neutral-800 border-none px-4 py-2 font-bold hover:bg-neutral-800 hover:text-white hover:shadow hover:shadow-lime-400"
				}
			>
				Get Started
			</Button>

			{/* mobile menu icon */}
			<div
				onClick={() => setIsOpen(!isOpen)}
				className={`cursor-pointer md:hidden block ml-2.5 ${textColor}`}
			>
				<img src="/menu-icon.svg" alt="mobile icon" />
			</div>
			{/* mobile dropdown */}
			<div
				className={`${
					isOpen ? "block" : "hidden"
				} absolute right-8 top-14 w-80 rounded-[10px] overflow-hidden md:hidden left-6`}
			>
				<ul className="flex flex-col  bg-black/20 justify-center items-center p-3 gap-8">
					<li className="list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
						<NavLink className="text-base text-neutral-800 deconone" to="#">
							Use Cases
						</NavLink>
					</li>
					<li className="list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
						<NavLink className="text-base text-neutral-800 deconone" to="#">
							Banks
						</NavLink>
					</li>
					<li className="list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
						<NavLink className="text-base text-neutral-800 deconone" to="#">
							Credit Unions
						</NavLink>
					</li>
					<li className="flex items-center justify-center list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
						<NavLink className="text-base text-neutral-800 deconone" to="#">
							Products
						</NavLink>
					</li>
					<li className="flex items-center justify-center list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
						<NavLink className="text-base text-neutral-800 deconone" to="#">
							Customers
						</NavLink>
					</li>
					<li className="flex items-center justify-center list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
						<NavLink className="text-base text-neutral-800 deconone" to="#">
							Resources
						</NavLink>
					</li>
					<li className="flex items-center justify-center list-none hover:border-b hover:border-dotted hover:border-b-fuchsia-900">
						<NavLink className="text-base text-neutral-800 deconone" to="#">
							Priceless Pricing™
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;
