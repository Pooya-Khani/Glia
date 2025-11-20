import { useState } from "react";
import UsaTrade from "../components/UsaTrade";

function UsaFreeTradeZonesOrganization() {
	const [active2, setActive2] = useState(1);
	const pages = [1, 2, 3, 4, 5, "...", 24];
	return (
		<div className="bg-white flex flex-col gap-4 mx-4 my-4">
			{/* Hero */}
			<section className="rounded-2xl py-20 px-4 sm:px-8 bg-[url(/usa-trade/usa-trade-hero-bg.png)] bg-cover bg-center bg-no-repeat">
				{/* --- Header Content --- */}
				<div className="max-w-7xl mx-auto text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Case Studies
					</h2>
					<p className="text-stone-400 max-w-2xl mx-auto text-sm md:text-base">
						Glia drives real, measurable ROI for financial institutions just
						like yours— <br /> here's how.
					</p>

					<div className="mt-12 text-xs font-bold tracking-widest text-stone-500 uppercase">
						Featured Case Study
					</div>
				</div>

				{/* --- Main Card --- */}
				<div className="bg-white rounded-2xl overflow-hidden mx-12 shadow-2xl flex flex-col lg:flex-row">
					{/* Left Side: Content & Stats */}
					<div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
						{/* Logo Placeholder */}
						<div className="mb-6">
							{/* اینجا جای لوگوی شرکت (Service 1st) است */}
							<span className="text-blue-600 font-bold text-xl flex items-center gap-2">
								<img src="/home/last-section-img.png" alt="Image" />
							</span>
						</div>

						{/* Title & Description */}
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							Service 1st
						</h3>
						<p className="text-gray-600 mb-6 leading-relaxed">
							Credit union deploys AI-powered phone virtual assistant for 275+
							hours saved per month
						</p>

						{/* Link */}
						<a
							href="#"
							className="inline-flex items-center text-black font-bold transition-colors mb-10"
						>
							Read Case Study{" "}
							<span className="ml-2 text-lg">
								<img src="/services/arrow-icon.png" alt="icon" />
							</span>
						</a>

						{/* Stats Grid */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4">
							{/* Stat 1 */}
							<div>
								<div className="text-4xl font-extrabold text-gray-900 mb-1">
									72%
								</div>
								<p className="text-xs font-bold text-gray-500">
									reduction in abandonment rate
								</p>
							</div>

							{/* Stat 2 */}
							<div>
								<div className="text-4xl font-extrabold text-gray-900 mb-1">
									54%
								</div>
								<p className="text-xs font-bold text-gray-500">
									drop in average wait time
								</p>
							</div>

							{/* Stat 3 */}
							<div>
								<div className="text-4xl font-extrabold text-gray-900 mb-1">
									22%
								</div>
								<p className="text-xs font-bold text-gray-500">
									decrease in monthly calls handled by agents
								</p>
							</div>

							{/* Stat 4 */}
							<div>
								<div className="text-4xl font-extrabold text-gray-900 mb-1">
									52
								</div>
								<p className="text-xs font-bold text-gray-500">
									hours saved per week by Phone GVA
								</p>
							</div>
						</div>
					</div>

					{/* Right Side: Image Placeholder */}
					<div className="p-6 ">
						{/* 
             اینجا تگ img ساخته شده است.
             هر وقت لینک عکس ساختمان را داشتید، در قسمت src قرار دهید.
             کلاس object-cover باعث می‌شود عکس دفرمه نشود و کل کادر را پر کند.
          */}
						<img
							src="/usa-trade/hero-img.png"
							alt="Case Study Building"
							className="w-full h-full rounded-2xl object-cover block"
						/>
					</div>
				</div>
			</section>
			{/*  */}
			<section className="bg-white px-4 py-6">
				<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
					{/* --- بخش سمت چپ: دراپ‌داون (Select Box) --- */}
					<div className="relative w-full sm:w-64">
						{/* آیکون فلش (Chevron Down) */}
						<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
							<img
								src="/usa-trade/arrow-down-icon.png"
								alt="Arrow Icon"
								className="w-4 h-4 object-contain opacity-60"
							/>
						</div>

						{/* ورودی Select */}
						<select className="w-full appearance-none bg-white border border-gray-200 text-gray-700 font-medium py-3 pl-4 pr-10 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent cursor-pointer">
							<option value="all">All Industry</option>
							<option value="finance">Finance & Banking</option>
							<option value="technology">Technology & SaaS</option>
							<option value="healthcare">Healthcare</option>
						</select>
					</div>

					{/* --- بخش سمت راست: جستجو (Search Input) --- */}
					<div className="relative w-full sm:w-80">
						{/* آیکون ذره‌بین (Search Icon) */}
						<div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
							<img
								src="/news/search-icon.png"
								alt="Search Icon"
								className="w-5 h-5 object-contain opacity-40"
							/>
						</div>

						{/* ورودی Input */}
						<input
							type="text"
							placeholder="Search by keyword"
							className="w-full bg-[#f3f4f6] text-gray-700 placeholder-gray-400 py-3 pl-12 pr-4 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-500 transition-colors"
						/>
					</div>
				</div>
			</section>
			<section className="grid grid-cols-1 md:grid-cols-3 mx-20 gap-8 mt-8">
				<UsaTrade
					image={"/usa-trade/t-1.png"}
					title={
						"From Legacy to Leading-Edge: Azura CU's Rapid Digital Transformation"
					}
					description={
						"Wait times and abandon rates plummet within 30 days of launching Glia"
					}
				/>
				<UsaTrade
					image={"/usa-trade/t-2.png"}
					title={"Service 1st FCU Modernizes Call Center for AI Era"}
					description={
						"Credit union deploys AI-powered phone virtual assistant for 275+ hours saved per month"
					}
				/>
				<UsaTrade
					image={"/usa-trade/t-3.png"}
					title={
						"Dialing Up Success: Heartland's Contact Center Transformation"
					}
					description={
						"Wisconsin CU achieves 40% faster service, 62% lower abandonment rate, with a 42% increase in interactions"
					}
				/>
				<UsaTrade
					image={"/usa-trade/t-4.png"}
					title={"Heritage Federal Credit Union: Scaling Service with AI"}
					description={
						"Improved service level, reduced average handle times – without additional headcount"
					}
				/>
				<UsaTrade
					image={"/usa-trade/t-5.png"}
					title={"Granite CU: Four New Branches, No New Staff"}
					description={
						"Using AI to work smarter, not harder, Granite personalizes service and increases membership—without increasing headcount"
					}
				/>
				<UsaTrade
					image={"/usa-trade/t-6.png"}
					title={"Dover Federal Goes All in With Digital Member Service	"}
					description={"Digital-first services fuel rapid membership growth"}
				/>
				<UsaTrade
					image={"/usa-trade/t-7.png"}
					title={
						"Celina Insurance Group Creates a Stand-out Agent Experience to Drive Agent Loyalty"
					}
					description={
						"Midwest mutual insurer scores near-perfect agent satisfaction with the launch of Glia"
					}
				/>
				<UsaTrade
					image={"/usa-trade/t-8.png"}
					title={
						"AmeriCU Credit Union Drives Up Self-Service and Member Satisfaction with Digital-First Approach"
					}
					description={"Powers new efficiencies with Glia Digital"}
				/>
				<UsaTrade
					image={"/usa-trade/t-9.png"}
					title={
						"Acadia FCU Redefines the Member Experience for Close-Knit Communities"
					}
					description={
						"Keeps personal ‘Acadia’ touch with unified platform for call center and digital interactions"
					}
				/>
			</section>
			{/* Pagination */}
			<section className="flex justify-between items-center mx-28 my-8 gap-6">
				<span className="text-white">.</span>
				<div className="flex gap-6">
					{pages.map((page, index) => (
						<button
							key={index}
							disabled={page === "..."}
							onClick={() => typeof page === "number" && setActive2(page)}
							className={`
            relative pb-1 text-sm transition-all
            ${
							active2 === page
								? "text-green-700 font-semibold"
								: "text-gray-500 hover:text-gray-700"
						}
            ${
							page === "..." ? "cursor-default text-gray-400" : "cursor-pointer"
						}
          `}
						>
							{page}

							{/* underline for active */}
							{active2 === page && (
								<span className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-300 rounded-full"></span>
							)}

							{/* hover underline for inactive */}
							{active2 !== page && page !== "..." && (
								<span
									className="
              absolute left-0 -bottom-1 w-full h-0.5 
              bg-green-200 opacity-0 hover:opacity-100 
              transition-opacity rounded-full
            "
								/>
							)}
						</button>
					))}
				</div>

				<button className="flex gap-3 self-end font-bold">
					NEXT <img src="/services/arrow-icon.png" alt="icon" />
				</button>
			</section>
		</div>
	);
}

export default UsaFreeTradeZonesOrganization;
