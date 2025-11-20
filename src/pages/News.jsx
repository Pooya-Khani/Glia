import { useState } from "react";
import NewsCard from "../components/NewsCard";

function News() {
	const tabs = ["All", "News", "Press Release"];
	const [active, setActive] = useState("All");
	const [active2, setActive2] = useState(1);
	const pages = [1, 2, 3, 4, 5, "...", 24];

	return (
		<div className="bg-white mx-2">
			{/* Hero */}
			<section className="flex flex-col justify-center items-center rounded-2xl text-white gap-3 bg-emerald-950 p-10 min-h-[80vh]">
				<div className="flex flex-col items-center justify-center gap-2 mt-6">
					<h1 className="font-bold text-3xl">Newsroom</h1>
					<span className="text-xs">
						A collection of press releases and news about USAFTZ
					</span>
				</div>
				<div className="flex flex-col justify-center items-center mt-8 gap-8">
					<p className="font-bold">FEATURED NEWS</p>
					<div className="flex gap-10">
						<div className="flex flex-col justify-between gap-16 max-w-96">
							<div className="flex flex-col gap-3">
								<div className="flex gap-2.5">
									<span className="text-purple-300 pr-2.5 border-r border-r-zinc-500">
										Press Release
									</span>
									<span className="text-neutral-400">August 26, 2025</span>
								</div>
								<h3 className="font-bold text-2xl ">
									Banking Study: Less Than 30% Getting Full Value of Contact
									Center AI, USAFTZ Finds
								</h3>
							</div>
							<div className="relative">
								<img
									className="rounded-2xl"
									src="/news/news-hero-1.png"
									alt="Hero Img"
								/>
								<span className="absolute top-0 left-0 rounded-tl-2xl rounded-br-2xl px-2 py-1 bg-violet-600">
									Press Release
								</span>
							</div>
						</div>
						<div className="flex flex-col justify-between gap-12 max-w-96">
							<div className="flex flex-col gap-3">
								<div className="flex gap-2.5">
									<span className="text-purple-300 pr-2.5 border-r border-r-zinc-500">
										Press Release
									</span>
									<span className="text-neutral-400">June 25, 2025</span>
								</div>
								<h3 className="font-bold text-2xl ">
									USAFTZ Interact 2025 To Highlight How Businesses Achieve
									Efficiency and Experience in the AI Era
								</h3>
							</div>
							<div className="relative">
								<img
									className="rounded-2xl"
									src="/news/news-hero-2.png"
									alt="Hero Img"
								/>
								<span className="absolute top-0 left-0 rounded-tl-2xl rounded-br-2xl px-2 py-1 bg-violet-600">
									Press Release
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* News */}
			<section className="flex flex-col justify-center items-center rounded-2xl text-white gap-3 p-10 ">
				{/* search and filter */}
				<div className="flex justify-between w-full">
					<div className="">
						<div className="flex items-center bg-[#F1F3F1] rounded-full px-2 py-2 border border-gray-200 w-fit gap-2">
							{tabs.map((tab) => (
								<button
									key={tab}
									onClick={() => setActive(tab)}
									className={`
            px-6 py-2 rounded-full font-semibold transition-all
            ${
							active === tab
								? "bg-white text-purple-600 shadow-sm"
								: "text-gray-600 hover:text-gray-800"
						}
          `}
								>
									{tab}
								</button>
							))}
						</div>
					</div>
					<div className="relative ">
						<input
							type="text"
							placeholder="Search by keyword"
							className="text-left outline-none placeholder-stone-500 py-4 px-14 rounded-xl bg-stone-100 border border-stone-400"
						/>
						<span className="absolute left-2.5 top-5 w-6 h-6">
							<img src="/news/search-icon.png" alt="search icon" />
						</span>
					</div>
				</div>
				{/* news section */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
					<NewsCard
						img={"/news/news-1.png"}
						title={
							"CX Today: Why Legacy CCaaS Pricing Is Broken and What’s Next"
						}
						date={"September 9, 2025"}
					/>
					<NewsCard
						img={"/news/news-2.png"}
						title={
							"Banking Study: Less Than 30% Getting Full Value of Contact Center AI, Glia Finds"
						}
						date={"August 26, 2025"}
					/>
					<NewsCard
						img={"/news/news-3.png"}
						title={
							"Glia Names Rei Kasai as Chief Product Officer to Lead Next Phase of AI-Driven Growth"
						}
						date={"July 30, 2025"}
					/>
					<NewsCard
						img={"/news/news-4.png"}
						title={
							"Glia Interact 2025 To Highlight How Businesses Achieve Efficiency and Experience in the AI Era"
						}
						date={"June 25, 2025"}
					/>
					<NewsCard
						img={"/news/news-5.png"}
						title={
							"Glia Named to 2025 AIFinTech100 List for Leadership in AI-Powered Customer Interactions"
						}
						date={"June 18, 2025"}
					/>
					<NewsCard
						img={"/news/news-6.png"}
						title={
							"Glia’s New AI Features Help Contact Centers Benchmark Against Peers and Optimize Balance of Human and AI Interactions"
						}
						date={"May 19, 2025"}
					/>
					<NewsCard
						img={"/news/news-7.png"}
						title={
							"Glia Named a 2025 Best Place to Work in Fintech by American Banker for Fourth Consecutive Year"
						}
						date={"May 13, 2025"}
					/>
					<NewsCard
						img={"/news/news-8.png"}
						title={
							"Glia Powers Seamless Mobile Banking Experience With Expanded CU*Answers App Integration"
						}
						date={"April 22, 2025"}
					/>
					{/* <NewsCard
						img={"/news/news-9.png"}
						title={
							"Blend and Glia Partner to Transform Customer and Member Interactions for Bank and Credit Union Lending Teams"
						}
						date={"May 6, 2025"}
					/> */}
					<NewsCard
						img={"/news/news-10.png"}
						title={
							"Glia Announces GVA Learning 360: First AI Virtual Assistants That Generate Responses Based on Human Agent Conversations"
						}
						date={"March 31, 2025"}
					/>
					{/* <NewsCard
						img={"/news/news-11.png"}
						title={
							"[Insurity] Insurity Expands Integration with Glia to Enhance Customer and Agent Interactions Across Core Insurance Solutions"
						}
						date={"March 27, 2025"}
					/>
					<NewsCard
						img={"/news/news-12.png"}
						title={
							"Contact Center Technology Pioneer Michael Tessler Joins Glia’s Board of Directors"
						}
						date={"December 13, 2024"}
					/> */}
				</div>
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

export default News;
