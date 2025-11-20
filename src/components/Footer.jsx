// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import TestimonialCard from "./TestimonialCard";
import FooterColumn from "./FooterColumn";
function Footer() {
	// --- DATA MOCKUP ---
	const testimonials = [
		{
			title: "“Glia gets what we say…",
			quote:
				"when we talk about improving the member and employee experiences, takes our feedback to heart, and strives to make our CX dreams a reality.",
			role: "DIGITAL EXPERIENCE MANAGER",
			author: "Alyxandra L.",
		},
		{
			title: "“Glia provides an industry leading product suite…",
			quote: "…and they are super easy to work with.",
			role: "VERIFIED USER IN BANKING",
			author: "VERIFIED USER IN BANKING, MID-MARKET",
			verifiedText: "Verified User in Banking",
		},
		{
			title: "“Glia provides an industry leading product suite…",
			quote: "…and they are super easy to work with.",
			role: "VERIFIED USER IN BANKING",
			author: "VERIFIED USER IN BANKING, MID-MARKET",
			verifiedText: "Verified User in Banking",
		},
		{
			title: "“Glia provides an industry leading product suite…",
			quote: "…and they are super easy to work with.",
			role: "VERIFIED USER IN BANKING",
			author: "VERIFIED USER IN BANKING, MID-MARKET",
			verifiedText: "Verified User in Banking",
		},
	];

	const footerLinks = {
		solutions: [
			"Contact Center Reimagined",
			"Online Banking Support",
			"Virtual Branch",
			"Loan Growth",
			"Deposit Growth",
			"IT HelpDesk",
		],
		industries: ["Banks", "Credit Unions", "Insurance", "Lenders"],
		products: [
			"All For AI",
			"AI For Customers",
			"AI For Agents",
			"Intelligent Voice",
			"Intelligent Digital",
		],
		platform: [
			"Our ChannelLess Platform",
			"The Glia Difference",
			"Partners & Integrations",
		],
		resources: ["Blog", "Webinars & Events", "Newsroom", "Resource Library"],
		company: ["About Glia", "Careers", "Priceless Pricing", "Contact Us"],
	};

	return (
		<footer className="bg-[#05000A] px-6 py-12 rounded-t-2xl text-white md:px-12 lg:px-24 lg:py-20">
			{/* --- TOP SECTION: LOGO & SLIDER --- */}
			<div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-20">
				{/* Left: Logo & Socials */}
				<div className="flex flex-col gap-8 lg:w-1/3">
					<div className="w-32">
						<img
							src="/logo-white.png"
							alt="Glia Logo"
							className="w-full object-contain"
						/>{" "}
						{/* <--- لوگوی اصلی سایت */}
					</div>

					<div className="flex flex-col gap-4">
						<span className="text-sm font-bold text-white">Follow Us</span>
						<div className="flex gap-3">
							{/* Social Icons Placeholders */}
							<a
								href="#"
								className="h-10 w-10 rounded-full bg-white/10 p-2.5 hover:bg-white/20 transition"
							>
								<img
									src="/linkedin.svg"
									alt="LinkedIn"
									className="w-full h-full object-contain"
								/>
							</a>
							<a
								href="#"
								className="h-10 w-10 rounded-full bg-white/10 p-2 hover:bg-white/20 transition"
							>
								<img
									src="/x.svg"
									alt="X"
									className="w-full h-full object-contain"
								/>
							</a>
							<a
								href="#"
								className="h-10 w-10 rounded-full bg-white/10 p-2 hover:bg-white/20 transition"
							>
								<img
									src="/youtube.svg"
									alt="YouTube"
									className="w-full h-full object-contain"
								/>
							</a>
							<a
								href="#"
								className="h-10 w-10 rounded-full bg-white/10 p-2 hover:bg-white/20 transition"
							>
								<img
									src="/facebook.svg"
									alt="Facebook"
									className="w-full h-full object-contain"
								/>
							</a>
						</div>
					</div>
				</div>

				{/* Right: Testimonials Slider */}
				<div className="lg:w-2/3 overflow-hidden">
					<div className="mb-6 flex items-center justify-between">
						<div>
							<h3 className="text-lg font-bold text-white">
								Hear from Glia customers
							</h3>
							<span className="text-xs text-stone-500 tracking-widest uppercase">
								BASED ON 50+ REVIEWS
							</span>
						</div>
						{/* Custom pagination dots container if needed, usually handled by Swiper */}
					</div>

					<Swiper
						slidesPerView={1}
						spaceBetween={20}
						pagination={{
							clickable: true,
							dynamicBullets: true,
						}}
						breakpoints={{
							768: {
								slidesPerView: 2,
								spaceBetween: 30,
							},
						}}
						modules={[Pagination]}
						className="mySwiper pb-12" // pb-12 creates space for pagination dots
					>
						{testimonials.map((item, index) => (
							<SwiperSlide key={index}>
								<TestimonialCard
									title={item.title}
									quote={item.quote}
									author={item.author}
									role={item.role}
									verifiedText={item.verifiedText}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			{/* --- MIDDLE SECTION: LINKS (GRID / ACCORDION) --- */}
			<div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12 border-t border-white/10 pt-16">
				{/* Column 1 */}
				<div className="flex flex-col gap-6">
					<FooterColumn title="Solutions" links={footerLinks.solutions} />
					<div className="hidden md:block h-4"></div> {/* Spacer */}
					<FooterColumn title="Industries" links={footerLinks.industries} />
				</div>

				{/* Column 2 */}
				<div className="flex flex-col gap-6">
					<FooterColumn title="Products" links={footerLinks.products} />
					<div className="hidden md:block h-4"></div>
					<FooterColumn
						title="Intelligent Voice"
						links={footerLinks.products.slice(0, 4)}
					/>{" "}
					{/* Sample subset */}
				</div>

				{/* Column 3 */}
				<div className="flex flex-col gap-6">
					<FooterColumn title="Platform" links={footerLinks.platform} />
					<div className="hidden md:block h-4"></div>
					<FooterColumn
						title="Customers"
						links={["Customer Stories", "Catalyst Awards"]}
					/>
				</div>

				{/* Column 4 */}
				<div className="flex flex-col gap-6">
					<FooterColumn title="Resources" links={footerLinks.resources} />
					<div className="hidden md:block h-4"></div>
					<FooterColumn title="Company" links={footerLinks.company} />
				</div>
			</div>

			{/* --- BOTTOM SECTION: COPYRIGHT --- */}
			<div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-[10px] text-stone-500 md:flex-row md:text-xs">
				<div>
					<p>&copy; Glia Technologies, Inc. All Rights Reserved.</p>
				</div>
				<div className="flex flex-wrap justify-center gap-6">
					<a href="#" className="hover:text-white">
						Bug Bounty
					</a>
					<a href="#" className="hover:text-white">
						Accessibility
					</a>
					<a href="#" className="hover:text-white">
						Privacy Policy
					</a>
					<a href="#" className="hover:text-white">
						Terms of Service
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

// <footer className="flex flex-col bg-gray-950 gap-y-14 pb-8 pt-14">
// 	{/* Contact & Testimonials */}
// 	<div className="flex px-28">
// 		<div className="flex flex-col justify-between mr-60 gap-40">
// 			<div>
// 				<img src="/logo-white.png" alt="logo white" />
// 			</div>
// 			<div className="flex flex-col gap-4">
// 				<div>
// 					<h4 className="text-white font-bold">Follow Us</h4>
// 				</div>
// 				<div className="flex gap-4">
// 					{/* Linkedin */}
// 					<div className="flex items-center justify-center w-12 h-12 border-3 hover:border-lime-50 hover:shadow hover:shadow-[#83ad6d] hover:bg-lime-400 group  bg-neutral-800 border-neutral-700 rounded-4xl">
// 						<svg
// 							width="23"
// 							height="23"
// 							viewBox="0 0 16 16"
// 							xmlns="http://www.w3.org/2000/svg"
// 							fill="currentColor"
// 							class="bi bi-linkedin text-white group-hover:fill-black"
// 						>
// 							<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
// 							<g
// 								id="SVGRepo_tracerCarrier"
// 								stroke-linecap="round"
// 								stroke-linejoin="round"
// 							></g>
// 							<g id="SVGRepo_iconCarrier">
// 								{" "}
// 								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>{" "}
// 							</g>
// 						</svg>
// 					</div>
// 					{/* X */}
// 					<div className="flex items-center justify-center w-12 h-12 border-3 hover:border-lime-50 hover:shadow hover:shadow-[#83ad6d] hover:bg-lime-400 group bg-neutral-800 border-neutral-700 rounded-4xl">
// 						<svg
// 							xmlns="http://www.w3.org/2000/svg"
// 							width="26"
// 							height="26"
// 							fill="currentColor"
// 							class="bi bi-twitter-x text-white group-hover:fill-black"
// 							viewBox="0 0 16 16"
// 						>
// 							<path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
// 						</svg>
// 					</div>
// 					{/* Youtube */}
// 					<div className="flex items-center justify-center w-12 h-12 border-3 hover:border-lime-50 hover:shadow hover:shadow-[#83ad6d] hover:bg-lime-400 group bg-neutral-800 border-neutral-700 rounded-4xl">
// 						<svg
// 							width="36px"
// 							className="text-white group-hover:text-black"
// 							height="36px"
// 							viewBox="0 0 24 24"
// 							fill="currentColor"
// 							xmlns="http://www.w3.org/2000/svg"
// 						>
// 							<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
// 							<g
// 								id="SVGRepo_tracerCarrier"
// 								stroke-linecap="round"
// 								stroke-linejoin="round"
// 							></g>
// 							<g id="SVGRepo_iconCarrier">
// 								{" "}
// 								<path
// 									d="M19.67 8.14002C19.5811 7.7973 19.4028 7.48433 19.1533 7.23309C18.9038 6.98185 18.5921 6.80134 18.25 6.71001C16.176 6.4654 14.0883 6.35517 12 6.38001C9.91174 6.35517 7.82405 6.4654 5.75001 6.71001C5.40793 6.80134 5.09622 6.98185 4.84674 7.23309C4.59725 7.48433 4.41894 7.7973 4.33001 8.14002C4.10282 9.41396 3.99236 10.706 4.00001 12C3.99198 13.3007 4.10244 14.5994 4.33001 15.88C4.42355 16.2172 4.60391 16.5239 4.85309 16.7696C5.10226 17.0153 5.41153 17.1913 5.75001 17.28C7.82405 17.5246 9.91174 17.6349 12 17.61C14.0883 17.6349 16.176 17.5246 18.25 17.28C18.5885 17.1913 18.8978 17.0153 19.1469 16.7696C19.3961 16.5239 19.5765 16.2172 19.67 15.88C19.8976 14.5994 20.008 13.3007 20 12C20.0077 10.706 19.8972 9.41396 19.67 8.14002ZM10.36 14.39V9.63001L14.55 12L10.36 14.38V14.39Z"
// 									fill="currentColor"
// 								></path>{" "}
// 							</g>
// 						</svg>
// 					</div>
// 					{/* Facebook */}
// 					<div className="flex items-center justify-center w-12 h-12 border-3 hover:border-lime-50 hover:shadow hover:shadow-[#83ad6d] hover:bg-lime-400 group bg-neutral-800 border-neutral-700 rounded-4xl">
// 						<svg
// 							className="text-white group-hover:text-black"
// 							width="46px"
// 							height="46px"
// 							viewBox="0 0 24 24"
// 							fill="currentColor"
// 							xmlns="http://www.w3.org/2000/svg"
// 							stroke=""
// 						>
// 							<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
// 							<g
// 								id="SVGRepo_tracerCarrier"
// 								stroke-linecap="round"
// 								stroke-linejoin="round"
// 							></g>
// 							<g id="SVGRepo_iconCarrier">
// 								{" "}
// 								<path
// 									d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z"
// 									fill="currentColor"
// 								></path>{" "}
// 							</g>
// 						</svg>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 		<div className="flex flex-col justify-between items-start gap-40">
// 			<div className="flex flex-col gap-2 text-white">
// 				<h4 className="font-bold text-2xl">Hear from Glia customers</h4>
// 				<span className="text-xs">BASED ON 50+ REVIEWS</span>
// 			</div>
// 			<div></div>
// 		</div>
// 	</div>

// 	{/* Frequent Links */}
// 	<div className="flex justify-between text-neutral-400 gap-10 px-30">
// 		{/* First part */}
// 		<div className="flex flex-col gap-6">
// 			<div className="flex flex-col gap-3">
// 				<h4 className="font-bold text-white">Solutions</h4>
// 				<ul className="flex flex-col gap-1 text-[15px]">
// 					<li>
// 						<a href="#">Contact Center Reimagined</a>
// 					</li>
// 					<li>
// 						<a href="#">Online Banking Support</a>
// 					</li>
// 					<li>
// 						<a href="#">Virtual Branch</a>
// 					</li>
// 					<li>
// 						<a href="#">Loan Growth</a>
// 					</li>
// 					<li>
// 						<a href="#">Deposit Growth & Retention</a>
// 					</li>
// 					<li>
// 						<a href="#">Payments/Collections Growth</a>
// 					</li>
// 					<li>
// 						<a href="#">Overflow & Afterhours Support</a>
// 					</li>
// 					<li>
// 						<a href="#">Core/OLB Conversions</a>
// 					</li>
// 					<li>
// 						<a href="#">M&A Support</a>
// 					</li>
// 					<li>
// 						<a href="#">IT Helpdesk</a>
// 					</li>
// 				</ul>
// 			</div>
// 			<div className="flex flex-col gap-3">
// 				<h4 className="font-bold text-white">Industries</h4>
// 				<ul className="flex flex-col gap-1 text-[15px]">
// 					<li>
// 						<a href="#">Banks</a>
// 					</li>
// 					<li>
// 						<a href="#">Credit Unions</a>
// 					</li>
// 				</ul>
// 			</div>
// 		</div>
// 		{/* Second part */}
// 		<div className="flex flex-col gap-6">
// 			<div className="flex flex-col gap-3">
// 				<h4 className="font-bold text-white">Products</h4>
// 				<ul className="flex flex-col gap-1 text-[15px]">
// 					<li>
// 						<a href="#">AI For All™</a>
// 					</li>
// 					<li>
// 						<a href="#">AI For Customers</a>
// 					</li>
// 					<li>
// 						<a href="#">AI For Agents</a>
// 					</li>
// 					<li>
// 						<a href="#">AI For Managers</a>
// 					</li>
// 					<li>
// 						<a href="#">AI For Execs</a>
// 					</li>
// 				</ul>
// 			</div>
// 			<div className="flex flex-col gap-3">
// 				<h4 className="font-bold text-white">Inteligent Voice</h4>
// 				<ul className="flex flex-col gap-1 text-[15px]">
// 					<li>
// 						<a href="#">Automated Interactions</a>
// 					</li>
// 					<li>
// 						<a href="#">Augment Agents</a>
// 					</li>
// 					<li>
// 						<a href="#">Automated Routing & Transfers</a>
// 					</li>
// 					<li>
// 						<a href="#">Cognitive Quality Management</a>
// 					</li>
// 					<li>
// 						<a href="#">AI-Powered Forecasting</a>
// 					</li>
// 				</ul>
// 			</div>
// 			<div className="flex flex-col gap-3">
// 				<h4 className="font-bold text-white">Inteligent Digital</h4>
// 				<ul className="flex flex-col gap-1 text-[15px]">
// 					<li>
// 						<a href="#">AI Self-Service & Agent Assist</a>
// 					</li>
// 					<li>
// 						<a href="#">High-Touch Interactions</a>
// 					</li>
// 					<li>
// 						<a href="#">Next-Gen Messaging</a>
// 					</li>
// 				</ul>
// 			</div>
// 		</div>
// 		{/* Third part */}
// 		<div className="flex flex-col gap-6">
// 			<div className="flex flex-col gap-3">
// 				<h4 className="font-bold text-white">Platform</h4>
// 				<ul className="flex flex-col gap-1 text-[15px]">
// 					<li>
// 						<a href="#">Our ChannelLess® Platform</a>
// 					</li>
// 					<li>
// 						<a href="#">The Glia Difference</a>
// 					</li>
// 					<li>
// 						<a href="#">Partners & Integrations</a>
// 					</li>
// 				</ul>
// 			</div>
// 			<div className="flex flex-col gap-3">
// 				<h4 className="font-bold text-white">Customers</h4>
// 				<ul className="flex flex-col gap-1 text-[15px]">
// 					<li>
// 						<a href="#">Customer Stories</a>
// 					</li>
// 					<li>
// 						<a href="#">Catalyst Awards</a>
// 					</li>
// 				</ul>
// 			</div>
// 		</div>
// 		{/* Forth part */}
// 		<div className="flex flex-col gap-6">
// 			<div className="flex flex-col gap-3">
// 				<h4 className="font-bold text-white">Resources</h4>
// 				<ul className="flex flex-col gap-1 text-[15px]">
// 					<li>
// 						<a href="#">Blog</a>
// 					</li>
// 					<li>
// 						<a href="#">Webinars & Events</a>
// 					</li>
// 					<li>
// 						<a href="#">Newsroom</a>
// 					</li>
// 					<li>
// 						<a href="#">Resource Library</a>
// 					</li>
// 					<li>
// 						<a href="#">Videos</a>
// 					</li>
// 				</ul>
// 			</div>
// 			<div className="flex flex-col gap-3">
// 				<h4 className="font-bold text-white">Company</h4>
// 				<ul className="flex flex-col gap-1 text-[15px]">
// 					<li>
// 						<a href="#">About Glia</a>
// 					</li>
// 					<li>
// 						<a href="#">Careers</a>
// 					</li>
// 					<li>
// 						<a href="#">Priceless Pricing™</a>
// 					</li>
// 					<li>
// 						<a href="#">Contact Us</a>
// 					</li>
// 				</ul>
// 			</div>
// 		</div>
// 	</div>

// 	{/* copyright section */}
// 	<div className="flex justify-between items-center px-28">
// 		<div>
// 			<span className="text-white">
// 				©Glia Technologies, Inc. All Rights Reserved - Site by Takeoff®
// 			</span>
// 		</div>
// 		<div>
// 			<ul className="flex gap-2.5 text-white">
// 				<li>Bug Bounty</li>
// 				<li>Accessebility</li>
// 				<li>Privacy Policy</li>
// 				<li>Terms of Service</li>
// 			</ul>
// 		</div>
// 	</div>
// </footer>
