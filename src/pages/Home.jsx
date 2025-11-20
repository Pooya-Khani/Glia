import { useState } from "react";
import Button from "../components/Button";
import BanksCarousel from "../components/BanksCarousel";

function Home() {
	const [activeItem, setActiveItem] = useState(0);

	const menuItems = [
		"Automate Interactions",
		"Augment Agents",
		"Automated Routing & Transfers",
		"Cognitive Quality Management",
		"AI-Powered Forecasting",
	];
	const [activeItem2, setActiveItem2] = useState(0);

	const menuItems2 = [
		"AI Self-Service & Agent Assist",
		"High-Touch Interactions",
		"Next-Gen Messaging",
	];

	const tabs = [
		{ id: 1, label: "For Customers" },
		{ id: 2, label: "For Agents" },
		{ id: 3, label: "For Managers" },
		{ id: 4, label: "For Executives" },
	];

	const [active, setActive] = useState(1);
	// استیت برای مدیریت تب فعال
	const [activeTab, setActiveTab] = useState("banks");

	return (
		<div className="bg-white">
			{/* Hero */}
			<section className="relative flex flex-col justify-center items-center min-h-[90vh] bg-contain bg-center bg-no-repeat bg-gray-950 bg-[url(/home/home-hero-bg.png)] text-white gap-8 mx-4 my-3 rounded-xl">
				<h1 className="font-bold text-3xl w-96 text-center">
					The Leader in Banking Interactions
				</h1>
				<span className="text-neutral-200 text-sm">
					AI-Powered Solutions For:
				</span>
				<div className="flex gap-2.5">
					<Button customClass="bg-teal-950 text-white py-1 px-4 font-bold border border-fuchsia-600">
						<img src="/home/android-icon.png" alt="android icon" />
						<span>Virtual Assistants</span>
					</Button>
					<Button customClass="bg-teal-950 text-white py-1 px-4 font-bold border border-fuchsia-600">
						<img src="/home/user-icon.png" alt="User icon" />
						<span>Front-line Teams</span>
					</Button>
					<Button customClass="bg-teal-950 text-white py-1 px-4 font-bold border border-fuchsia-600">
						<img src="/home/phone-icon.png" alt="android icon" />
						<span>Mobile & Digital</span>
					</Button>
				</div>
				<div className="absolute bottom-0 right-0 w-60 h-36 rounded-tl-xl rounded-br-xl bg-white text-black flex flex-col gap-8 items-center justify-center">
					<span className="text-xs w-48">
						Exclusive AI Research: Hear From 945 Leaders
					</span>
					<Button customClass="bg-lime-500 text-neutral-800 font-semibold py-2 px-12 border-none hover:bg-neutral-800 hover:text-white hover:shadow hover:shadow-lime-400 ">
						Read the Survey
					</Button>
				</div>
			</section>
			{/* Bank section */}
			<section className="flex flex-col justify-center items-center rounded-2xl text-white gap-6 bg-emerald-950 p-10 min-h-[80vh] mx-4 my-4">
				<span className="w-fit bg-emerald-950 rounded-full border border-zinc-400 shadow-sm shadow-white px-3 font-semibold">
					BUILT FOR BANKING
				</span>
				<h3 className="text-4xl w-xl font-bold text-center">
					We're Built for High Stakes Banking Interactions.
				</h3>
				<div className="w-4xl">
					<div className="min-h-screen flex flex-col items-center justify-center py-20 mx-28 font-sans">
						{/* کانتینر اصلی با عرض ثابت و بزرگ */}
						<div className="">
							{/* === TAB HEADERS === */}
							<div className="flex items-end pl-0">
								{/* دکمه Banks (سمت چپ) */}
								<button
									onClick={() => setActiveTab("banks")}
									className={`
              w-[50%] h-20 text-xl font-bold transition-all duration-200
              flex items-center justify-center
              ${
								activeTab === "banks"
									? "bg-white text-black rounded-t-3xl rounded-b-none  z-10"
									: "bg-white/15 text-white rounded-[20px] mb-4 ml-2 hover:bg-[#2a4240]"
							}
            `}
								>
									Banks
								</button>

								{/* دکمه Credit Unions (سمت راست) */}
								<button
									onClick={() => setActiveTab("credit-unions")}
									className={`
              w-[50%] h-20 text-xl font-bold transition-all duration-200
              flex items-center justify-center
              ${
								activeTab === "credit-unions"
									? "bg-white text-black rounded-t-3xl rounded-b-none  z-10"
									: "bg-white/15 text-white rounded-[20px] mb-2 ml-1 hover:bg-[#2a4240]"
							}
            `}
								>
									Credit Unions
								</button>
							</div>

							{/* === MAIN CONTENT BODY === */}
							<div
								className={`
            bg-white p-16 w-2xl md:w-5xl shadow-2xl
            rounded-b-[40px] rounded-tr-[40px]
            ${activeTab === "banks" ? "rounded-tl-none" : "rounded-tl-[40px]"} 
            ${activeTab === "credit-unions" ? "rounded-tr-none" : ""}
          `}
							>
								{/* slider Banks */}
								<BanksCarousel />
								{/* rest of the content */}
								<div className="flex gap-10 mt-4">
									<div className="flex flex-col gap-6 w-[50%]">
										<h3 className="text-black font-bold text-3xl">
											AI that helps you grow your bank, not your team.
										</h3>
										<ul className="flex flex-col gap-2">
											<li className="flex gap-2.5 items-center  text-sm">
												<img
													className="w-6 h-6"
													src="/home/list-icon.png"
													alt="Thick Icon"
												/>
												<span className="text-zinc-800">
													Deliver effortless experiences that keep customers
													coming back
												</span>
											</li>
											<li className="flex gap-2.5 items-center  text-sm">
												<img
													className="w-6 h-6"
													src="/home/list-icon.png"
													alt="Thick Icon"
												/>
												<span className="text-zinc-800">
													Raise conversion rates with tools made for banking
													flows
												</span>
											</li>
											<li className="flex gap-2.5 items-center  text-sm">
												<img
													className="w-6 h-6"
													src="/home/list-icon.png"
													alt="Thick Icon"
												/>
												<span className="text-zinc-800">
													Let leaders focus on outcomes—AI handles the metrics
												</span>
											</li>
										</ul>
										<Button customClass="bg-lime-500 text-neutral-800 py-2 px-4 border-none hover:bg-neutral-800 hover:text-white hover:shadow hover:shadow-lime-400 w-fit font-bold">
											Glia for Banks
										</Button>
									</div>
									<div className="bg-orange-50 px-4 py-4 flex gap-8 rounded-2xl">
										<div>
											<ul className="flex flex-col gap-10">
												<li className="flex gap-2.5 items-center  text-sm">
													<img
														className="w-6 h-6"
														src="/home/rise-icon.png"
														alt="Thick Icon"
													/>
													<span className="text-zinc-800">
														Increased digital branch loan dollars by
													</span>
												</li>
												<li className="flex gap-2.5 items-center  text-sm">
													<img
														className="w-6 h-6"
														src="/home/rise-icon.png"
														alt="Thick Icon"
													/>
													<span className="text-zinc-800">
														Boosted digital containment rate to
													</span>
												</li>
												<li className="flex gap-2.5 items-center  text-sm">
													<img
														className="w-6 h-6 rotate-90"
														src="/home/rise-icon.png"
														alt="Thick Icon"
													/>
													<span className="text-zinc-800">
														Slashed average wait time by
													</span>
												</li>
												<li className="flex gap-2.5 items-center  text-sm">
													<img
														className="w-6 h-6 rotate-90"
														src="/home/rise-icon.png"
														alt="Thick Icon"
													/>
													<span className="text-zinc-800">
														Reduced abandonment rate by
													</span>
												</li>
											</ul>
										</div>
										<div>
											<ul className="text-black flex flex-col gap-8">
												<li className="font-bold text-xl">511%</li>
												<li className="font-bold text-xl">62%</li>
												<li className="font-bold text-xl">90%</li>
												<li className="font-bold text-xl">12%</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Ai section */}
			<section className="relative bg-fuchsia-950 flex flex-col  rounded-2xl text-white gap-6 p-10 pt-20 min-h-[80vh] mx-4 my-4">
				{/* buttom right */}
				<div className="absolute rounded-2xl bottom-3 right-3 bg-[#2a0f3a] flex items-center justify-center p-6">
					<div className="w-full max-w-96 space-y-6">
						{/* First message */}
						<div className="flex">
							<div className="bg-white/90 text-black rounded-xl px-4 py-3 max-w-[85%] shadow-md">
								<p className="text-xs font-semibold text-gray-600 mb-1">
									Customer
								</p>
								<p className="text-sm">
									Hello! I would like to open another account for savings.
								</p>
							</div>
						</div>

						{/* Spacer blurred area placeholder */}
						<div className="h-24 w-full bg-black/30 blur rounded-xl" />

						{/* Second message */}
						<div className="flex">
							<div className="bg-white/90 text-black rounded-xl px-4 py-2 max-w-[60%] shadow-md">
								<p className="text-xs font-semibold text-gray-600 mb-1">
									Customer
								</p>
								<p className="text-sm">Thanks!</p>
							</div>
						</div>
					</div>
				</div>
				{/* Main content of section */}
				<div className="flex flex-col gap-8 ">
					<div className="w-[340px] flex flex-col gap-6">
						<span className="w-fit bg-emerald-950 rounded-full border border-zinc-400 shadow-sm shadow-white px-3 font-semibold">
							AI FOR ALL
						</span>
						<h3 className="text-4xl w-xl font-bold">AI That Works For All</h3>
						<p className="text-xs text-stone-300">
							How many of your customer interactions should you enhance or
							automate with AI? All of them. Unlock game-changing outcomes
							across your organization with our ChannelLess® AI contact center
							platform.
						</p>
						<Button customClass="bg-lime-500 text-neutral-800 py-2 px-4 border-none hover:bg-neutral-800 hover:text-white hover:shadow hover:shadow-lime-400 w-fit font-bold">
							See AI For All
						</Button>
					</div>
					{/* ul tabs */}
					<div className="">
						<div className="flex gap-10 text-white">
							<div className="flex gap-8 max-w-4xl w-full">
								{/* Left Tabs */}
								<div className="space-y-6 w-40">
									{tabs.map((t) => (
										<button
											key={t.id}
											onClick={() => setActive(t.id)}
											className={`flex items-center space-x-3 text-left w-full transition-all duration-200`}
										>
											<span
												className={`w-3 h-3 rounded-full inline-block transition-all duration-200 ${
													active === t.id
														? "bg-green-400"
														: "border border-gray-400 rounded-full"
												}`}
											/>
											<span
												className={`${
													active === t.id
														? "text-white font-semibold"
														: "text-gray-300"
												}`}
											>
												{t.label}
											</span>
										</button>
									))}
								</div>

								{/* Right Content (Static as requested) */}
								<div className="max-w-60 space-y-4">
									<p className="text-sm leading-relaxed text-gray-200">
										Finally eliminate the efficiency vs. experience tradeoff
										with virtual assistants built for your industry.
									</p>

									<button className="flex items-center space-x-2 font-semibold hover:opacity-80 transition">
										<span className="font-bold">
											Meet Your Virtual Assistants
										</span>
										<span className="text-xl">→</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Join Us */}
			<section className="flex flex-col justify-center items-center rounded-2xl text-white gap-6 bg-emerald-950 p-10 pb-12 px-24 min-h-[40vh] mx-4 my-4">
				<div className="bg-purple-950 w-full px-40 rounded-2xl py-8 flex gap-20 justify-between items-center">
					<div className="flex flex-col gap-3">
						<span className="w-fit bg-purple-950 rounded-full border border-zinc-400 shadow-sm shadow-white px-3 font-semibold">
							Meet Glia
						</span>
						<h3 className="text-4xl w-xl font-bold">USAFTZ Interact 2025</h3>
						<div className="flex gap-3">
							<span className="border-r text-sm border-r-stone-500 text-stone-200 pr-3">
								October 12–15, 2025
							</span>
							<span className="text-sm text-stone-200">San Diego, CA</span>
						</div>
						<p className="text-sm text-stone-200">
							Join us for an out-of-this-world experience at USAFTZs premier
							customer and industry event.
						</p>
					</div>
					<div>
						<Button customClass="bg-purple-950 border border-fuchsia-600 px-6 py-2 font-bold">
							Join Us
						</Button>
					</div>
				</div>
				<div className="w-full  rounded-2xl py-8 flex gap-20 ">
					<div className="w-[50%] flex flex-col gap-2.5">
						<span className="w-fit bg-emerald-950 rounded-full border border-zinc-400 shadow-sm shadow-white px-3 font-semibold">
							Unified Interactions
						</span>
						<h2 className="font-bold text-5xl">Leave Customers Speechless</h2>
					</div>
					<div className="w-[50%] flex flex-col gap-5 mt-4">
						<p className="text-sm text-stone-300">
							Skip the small talk and deliver the big changes customers have
							been waiting for. USAFTZ’s AI contact center platform offers the
							fully connected voice and digital experience today’s customers
							expect.
						</p>
						<Button customClass="bg-lime-500 text-neutral-800 py-2 px-4 border-none hover:bg-neutral-800 hover:text-white hover:shadow hover:shadow-lime-400 w-fit font-bold">
							See Glia Live
						</Button>
					</div>
				</div>
			</section>
			{/* USAFTZ VOICE */}
			<section>
				<div className="w-full bg-white py-20 px-4 md:px-8 lg:px-16 font-sans flex justify-center">
					{/* کانتینر اصلی ریسپانسیو */}
					<div className="w-full max-w-[1300px] flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
						{/* === ستون سمت چپ (متن و منو) === */}
						<div className="w-full lg:w-5/12 space-y-10 pt-4">
							{/* بج: USAFTZ VOICE */}
							<span className="inline-block bg-[#e6f4d0] text-[#3f6212] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
								USAFTZ Voice
							</span>

							{/* تیتر اصلی */}
							<h1 className="text-4xl md:text-5xl font-extrabold text-black leading-[1.1]">
								Change <br />
								The Entire Conversation
							</h1>

							{/* توضیحات */}
							<p className="text-gray-600 text-sm leading-relaxed">
								USAFTZ Voice enhances every interaction with AI so you can leave
								legacy CCaaS and CX platforms in the past.
							</p>

							{/* دکمه سبز */}
							<div>
								<Button>USAFTZ Voice</Button>
							</div>

							{/* لیست منو */}
							<div className="space-y-6 mt-12">
								{menuItems.map((item, index) => (
									<div
										key={index}
										onClick={() => setActiveItem(index)}
										className="flex items-center gap-4 cursor-pointer group"
									>
										{/* این قسمت دایره/لوزی وضعیت آیتم‌هاست */}
										<div className="flex items-center justify-center w-4">
											{activeItem === index ? (
												// حالت فعال (دایره سبز)
												<div className="w-3 h-3 bg-[#84cc16] rounded-full shadow-[0_0_10px_rgba(132,204,22,0.6)]"></div>
											) : (
												// حالت غیرفعال (لوزی توخالی)
												<div className="w-2 h-2 border border-gray-300 rotate-45 group-hover:border-gray-500 transition-colors"></div>
											)}
										</div>

										{/* متن آیتم */}
										<span
											className={`text-sm transition-colors duration-200 ${
												activeItem === index
													? "font-bold text-black"
													: "font-medium text-gray-400 hover:text-gray-600"
											}`}
										>
											{item}
										</span>
									</div>
								))}
							</div>
						</div>

						{/* === ستون سمت راست (کارت و چت) === */}
						<div className="w-full lg:w-7/12">
							<div className="bg-[#fdf8f4] rounded-[40px] p-8 md:p-16 w-full min-h-[700px] relative flex flex-col">
								{/* متن بالای کارت */}
								<div className="mb-20">
									<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
										Automate Interactions
									</h3>
									<p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6 max-w-2xl">
										Deploy virtual assistants that customers actually like
										speaking to, so you can quickly solve routine inquiries and
										free up agents to handle more complex issues.
									</p>

									{/* لینک همراه با آیکون فلش */}
									<a
										href="#"
										className="inline-flex items-center text-black font-bold text-lg hover:underline gap-3 group"
									>
										Meet Glia Virtual Assistants
										{/* PLACEHOLDER: Arrow Icon */}
										<img
											src="/services/arrow-icon.png"
											alt="Arrow Right Icon"
											className="w-5 h-5 bg-transparent block"
										/>
									</a>
								</div>

								{/* رابط کاربری چت (Chat UI) */}
								<div className="flex flex-col space-y-6 max-w-md mx-auto w-full mt-auto">
									{/* پیام کاربر (سفید) */}
									<div className="self-start bg-white rounded-2xl rounded-bl-none p-6 shadow-sm border border-gray-100 w-fit max-w-[90%]">
										<p className="text-gray-800 text-xl font-medium">
											I need help moving money to a new account.
										</p>
									</div>

									{/* پیام بات (تیره) */}
									<div className="self-start relative mt-6 w-full">
										{/* لیبل بالای پیام بات */}
										<div className="absolute -top-4 left-6 bg-[#2e2446] text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-2 z-10 border border-gray-700">
											Glia Virtual Assistant
											{/* PLACEHOLDER: Sound Wave / Activity Icon */}
											<img
												src=""
												alt="Sound Wave Icon"
												className="w-3 h-3 block"
											/>
										</div>

										{/* حباب پیام */}
										<div className="bg-[#1c1427] text-white rounded-2xl rounded-tl-none p-8 shadow-xl relative border border-gray-800">
											<p className="text-xl leading-snug">
												Hi, Blake! I'd be glad to help you out. Could you
												specify the accounts
											</p>

											{/* افکت درخشش پایین سمت راست */}
											<div className="absolute -bottom-3 -right-3 w-10 h-10 flex items-center justify-center">
												{/* نور پس زمینه سبز محو */}
												<div className="absolute inset-0 bg-[#84cc16] blur-xl opacity-70 rounded-full"></div>

												{/* PLACEHOLDER: Sparkle Icon */}
												<img
													src=""
													alt="Sparkle Icon"
													className="w-6 h-6 relative z-10 block"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full bg-white py-20 px-4 md:px-8 lg:px-16 font-sans flex justify-center">
					{/* کانتینر اصلی ریسپانسیو */}
					<div className="w-full max-w-[1300px] flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
						{/* === ستون سمت چپ (کارت و چت) === */}
						<div className="w-full lg:w-7/12">
							<div className="bg-[#fdf8f4] rounded-[40px] p-8 md:p-16 w-full min-h-[700px] relative flex flex-col">
								{/* متن بالای کارت */}
								<div className="mb-20">
									<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
										AI Self-Service & Agent Assist
									</h3>
									<p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6 max-w-2xl">
										Give your customersvirtual assistants that quickly solve
										routine inquiries and free up your agents to do what they do
										best.
									</p>

									{/* لینک همراه با آیکون فلش */}
									<a
										href="#"
										className="inline-flex items-center text-black font-bold text-lg hover:underline gap-3 group"
									>
										Meet Glia Virtual Assistants
										{/* PLACEHOLDER: Arrow Icon */}
										<img
											src="/services/arrow-icon.png"
											alt="Arrow Right Icon"
											className="w-5 h-5 bg-transparent block"
										/>
									</a>
								</div>

								{/* رابط کاربری چت (Chat UI) */}
								<div className="flex flex-col space-y-6 max-w-md mx-auto w-full mt-auto">
									{/* پیام کاربر (سفید) */}
									<div className="self-start bg-white rounded-2xl rounded-bl-none p-6 shadow-sm border border-gray-100 w-fit max-w-[90%]">
										<p className="text-gray-800 text-xl font-medium">
											Your loan application won't let me upload my ID.
										</p>
									</div>

									{/* پیام بات (تیره) */}
									<div className="self-start relative mt-6 w-full">
										{/* حباب پیام */}
										<div className="bg-[#1c1427] text-white rounded-2xl rounded-tl-none px-8 py-6 shadow-xl relative border border-gray-800">
											<p className="text-xl leading-snug">
												Agent Assist GVA <br /> <br />
												1. Ask customer to check file size <br />
												2. If issue persists, provide SMS upload link <br />
												3. Confirm receip before ending interaction <br />{" "}
												<br /> <br />
												<span> Internal</span>
											</p>

											{/* افکت درخشش پایین سمت راست */}
											<div className="absolute -top-3 right-3 w-10 h-10 flex items-center justify-center">
												{/* نور پس زمینه سبز محو */}
												<div className="absolute inset-0 bg-[#84cc16] blur-xl opacity-70 rounded-full"></div>

												{/* PLACEHOLDER: Sparkle Icon */}
												<img
													src=""
													alt="Sparkle Icon"
													className="w-6 h-6 relative z-10 block"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* === ستون سمت راست (متن و منو) === */}
						<div className="w-full lg:w-5/12 space-y-10 pt-4">
							{/* بج: USAFTZ VOICE */}
							<span className="inline-block bg-[#e6f4d0] text-[#3f6212] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
								GLIA DIGITAL
							</span>

							{/* تیتر اصلی */}
							<h1 className="text-4xl md:text-5xl font-extrabold text-black leading-[1.1]">
								Bring Digital <br />
								To Life
							</h1>

							{/* توضیحات */}
							<p className="text-gray-600 text-sm leading-relaxed">
								Glia Digital makes every chat, SMS, and web interaction instant
								and personal—no frustrating handoffs, no missing context, no
								dead ends.
							</p>

							{/* دکمه سبز */}
							<div>
								<Button>Glia Digital</Button>
							</div>

							{/* لیست منو */}
							<div className="space-y-6 mt-12">
								{menuItems2.map((item, index) => (
									<div
										key={index}
										onClick={() => setActiveItem2(index)}
										className="flex items-center gap-4 cursor-pointer group"
									>
										{/* این قسمت دایره/لوزی وضعیت آیتم‌هاست */}
										<div className="flex items-center justify-center w-4">
											{activeItem2 === index ? (
												// حالت فعال (دایره سبز)
												<div className="w-3 h-3 bg-[#84cc16] rounded-full shadow-[0_0_10px_rgba(132,204,22,0.6)]"></div>
											) : (
												// حالت غیرفعال (لوزی توخالی)
												<div className="w-2 h-2 border border-gray-300 rotate-45 group-hover:border-gray-500 transition-colors"></div>
											)}
										</div>

										{/* متن آیتم */}
										<span
											className={`text-sm transition-colors duration-200 ${
												activeItem2 === index
													? "font-bold text-black"
													: "font-medium text-gray-400 hover:text-gray-600"
											}`}
										>
											{item}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* THE GLIA DIFFERENCE */}
			<section className="w-full bg-orange-50 rounded-2xl mx-4 min-h-screen py-12 px-4 md:px-8 lg:px-16 font-sans flex flex-col justify-center">
				<div className="max-w-[1200px] w-full flex flex-col space-y-16">
					{/* === 1. BLACK BANNER (TOP) === */}
					<div className="w-full bg-[#050505] rounded-[30px] py-12 px-6 text-center shadow-2xl flex flex-col items-center justify-center space-y-6">
						<h2 className="text-white text-3xl md:text-4xl font-bold tracking-wide">
							See Your Future
						</h2>
						<button className="border border-purple-500 text-white px-8 py-2 rounded-full hover:bg-purple-900/30 transition-colors text-sm font-bold">
							Book A Demo
						</button>
					</div>

					{/* === 2. HEADER SECTION === */}
					<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
						<div className="space-y-4 max-w-2xl">
							{/* Tag */}
							<span className="inline-block bg-[#e5e7eb] text-gray-600 text-[10px] md:text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
								THE GLIA DIFFERENCE
							</span>
							{/* Title */}
							<h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight">
								Our Difference, <br />
								Your Advantage
							</h1>
							{/* Description */}
							<p className="text-gray-600 text-sm md:text-base leading-relaxed pt-2">
								Want to cut the cord with your CCaaS vendor? So do 93% of
								contact center leaders. Discover how 600+ organizations have
								turned the Glia Difference into their competitive edge.
							</p>
						</div>

						{/* Green Button */}
						<button className="bg-[#84cc16] hover:bg-[#65a30d] text-black text-sm font-bold py-3 px-8 rounded-full shadow-sm transition-colors whitespace-nowrap">
							The Glia Difference
						</button>
					</div>

					{/* === 3. CARDS GRID === */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* --- Card 1: ChannelLess Architecture (Image Card) --- */}
						<div className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-row h-full min-h-[280px]">
							{/* Left Content */}
							<div className="p-8 flex flex-col justify-between w-3/5">
								<div>
									<h3 className="text-xl md:text-2xl font-extrabold text-[#0f172a] mb-3">
										ChannelLess® Architecture
									</h3>
									<p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4">
										So long, silos. Glia's AI contact center platform
										architecture delivers the fully connected experience your
										customers have been waiting for.
									</p>
								</div>
								<a
									href="#"
									className="text-purple-700 font-bold text-xs md:text-sm flex items-center gap-1 hover:underline"
								>
									Lead The Way <span>→</span>
								</a>
							</div>
							{/* Right Image Placeholder */}
							<div className="w-2/5 bg-gray-200 relative">
								{/* PLACEHOLDER FOR IMAGE (Man with headset) */}
								<img
									src=""
									alt="Man with headset"
									className="w-full h-full object-cover bg-gray-300 block"
								/>
								{/* Floating Icon Badge Placeholder */}
								<div className="absolute bottom-4 left-5 bg-white p-2 rounded-full shadow-md">
									<img
										src=""
										alt="Chart Icon"
										className="w-6 h-6 block bg-gray-100 rounded-full"
									/>
								</div>
							</div>
						</div>

						{/* --- Card 2: Intelligent Reporting --- */}
						<div className="bg-white rounded-3xl shadow-sm p-8 flex justify-between items-start h-full min-h-[280px]">
							<div className="flex flex-col justify-between h-full pr-4 w-3/4">
								<div>
									<h3 className="text-xl md:text-2xl font-extrabold text-[#0f172a] mb-3">
										Intelligent Reporting & Insights
									</h3>
									<p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4">
										You're sitting on a goldmine of data. With Glia's
										ChannelLess® AI, you can mine rich insights from every
										single interaction.
									</p>
								</div>
								<a
									href="#"
									className="text-purple-700 font-bold text-xs md:text-sm flex items-center gap-1 hover:underline"
								>
									Lead the Way <span>→</span>
								</a>
							</div>

							{/* Icon Placeholder */}
							<div className="w-1/4 flex justify-end">
								<div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#f8fbf8] border border-gray-100 flex items-center justify-center">
									{/* PLACEHOLDER FOR ICON (Infinity Loop) */}
									<img
										src=""
										alt="Infinity Icon"
										className="w-6 h-6 md:w-8 md:h-8 block opacity-50"
									/>
								</div>
							</div>
						</div>

						{/* --- Card 3: Security & Compliance --- */}
						<div className="bg-white rounded-3xl shadow-sm p-8 flex justify-between items-start h-full min-h-[280px]">
							<div className="flex flex-col justify-between h-full pr-4 w-3/4">
								<div>
									<h3 className="text-xl md:text-2xl font-extrabold text-[#0f172a] mb-3">
										Security & Compliance
									</h3>
									<p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4">
										When you operate in an industry where trust is everything,
										you need a partner that upholds the highest standards.
										Here's why Glia is uniquely up to the task.
									</p>
								</div>
								<a
									href="#"
									className="text-purple-700 font-bold text-xs md:text-sm flex items-center gap-1 hover:underline"
								>
									Discover Our Approach <span>→</span>
								</a>
							</div>

							{/* Icon Placeholder */}
							<div className="w-1/4 flex justify-end">
								<div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#f8fbf8] border border-gray-100 flex items-center justify-center">
									{/* PLACEHOLDER FOR ICON (Shield) */}
									<img
										src=""
										alt="Shield Icon"
										className="w-6 h-6 md:w-8 md:h-8 block opacity-50"
									/>
								</div>
							</div>
						</div>

						{/* --- Card 4: Partners & Integrations --- */}
						<div className="bg-white rounded-3xl shadow-sm p-8 flex justify-between items-start h-full min-h-[280px]">
							<div className="flex flex-col justify-between h-full pr-4 w-3/4">
								<div>
									<h3 className="text-xl md:text-2xl font-extrabold text-[#0f172a] mb-3">
										Partners & Integrations
									</h3>
									<p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4">
										Your business is going places. We're going with you. Find
										out how our integrations let you seamlessly embed Glia into
										your larger tech ecosystem.
									</p>
								</div>
								<a
									href="#"
									className="text-purple-700 font-bold text-xs md:text-sm flex items-center gap-1 hover:underline"
								>
									See Our Integrations <span>→</span>
								</a>
							</div>

							{/* Icon Placeholder */}
							<div className="w-1/4 flex justify-end">
								<div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#f8fbf8] border border-gray-100 flex items-center justify-center">
									{/* PLACEHOLDER FOR ICON (Connect/Grid) */}
									<img
										src=""
										alt="Connect Icon"
										className="w-6 h-6 md:w-8 md:h-8 block opacity-50"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* tt */}
				<div className="max-w-[1200px] w-full p-8 md:p-16 space-y-16">
					{/* Top Section */}
					<div className="text-center space-y-3">
						<span className="text-xs font-semibold tracking-wide bg-gray-200 px-3 py-1 rounded-full inline-block">
							SUCCESS STORIES
						</span>
						<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
							Drive Impact Beyond Words
						</h2>
						<p>
							See how Glia delivers measurable gains for businesses like yours.
						</p>
					</div>

					{/* Stats Card */}
					<div className="bg-white rounded-3xl shadow-md p-8 md:p-12 max-w-4xl mx-auto space-y-6">
						<div className="flex flex-col gap-3">
							<img
								className="w-fit"
								src="/home/last-section-img.png"
								alt="section img"
							/>
							<h3 className="text-md font-bold text-black">Service 1ST</h3>
							<p className="text-gray-500 text-sm mt-1">
								Credit union deploys AI-powered phone virtual assistant for 275+
								hours saved per month
							</p>
							<a
								href="#"
								className="inline-flex items-center text-black font-bold text-sm hover:underline gap-3 group"
							>
								Get The Story
								{/* PLACEHOLDER: Arrow Icon */}
								<img
									src="/services/arrow-icon.png"
									alt="Arrow Right Icon"
									className="w-5 h-5 bg-transparent block"
								/>
							</a>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 mt-14 text-center md:text-left">
							<div>
								<p className="text-3xl font-bold">95%</p>
								<p className="text-gray-500 text-sm">
									reduction in abandonment rate
								</p>
							</div>
							<div>
								<p className="text-3xl font-bold">71%</p>
								<p className="text-gray-500 text-sm">
									drop in average wait time
								</p>
							</div>
							<div>
								<p className="text-3xl font-bold">29%</p>
								<p className="text-gray-500 text-sm">
									decrease in monthly calls handled by agents
								</p>
							</div>
							<div>
								<p className="text-3xl font-bold">69</p>
								<p className="text-gray-500 text-sm">
									hours saved per week by Phone GVA
								</p>
							</div>
						</div>
					</div>

					{/* Survey Banner */}
					<div className="bg-[#0f2d23] text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
						<h3 className="text-lg font-bold max-w-md">
							Hear From 945 Leaders: <br /> Metric Sherpa AI Survey
						</h3>

						<Button customClass="mt-5 md:mt-0 text-white font-semibold px-5 py-2 rounded-2xl border border-fuchsia-600 hover:opacity-80 transition">
							Get The Report
						</Button>
					</div>

					{/* Article Section */}
					<div className="space-y-6 max-w-6xl mx-auto">
						<div className="flex items-center justify-between">
							<div className="space-y-4">
								<span className="text-xs font-semibold tracking-wide bg-stone-200 px-3 py-1 rounded-full inline-block">
									Contact center ai Resources
								</span>
								<h2 className="text-3xl font-extrabold tracking-tight">
									Challenge Conventional Wisdom
								</h2>
								<p className="text-sm">
									Offer self service, boost agent productivity, unlock insights
									from <br /> customer data, and beyond: Our resources help you
									rethink outdated <br /> assumptions and break new ground.
								</p>
							</div>

							<Button>See The Library</Button>
						</div>

						{/* Cards */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
							{[1, 2, 3].map((i) => (
								<div key={i} className="space-y-3">
									{/* Image Placeholder */}
									<div className="w-full h-48 bg-purple-300 rounded-2xl flex items-center justify-center text-white font-semibold">
										Image Placeholder
									</div>

									{/* Info */}
									<p className="text-xs text-gray-500">Aug 12, 2023</p>
									<h4 className="font-semibold text-gray-800">
										Lorem ipsum dolor sit amet consectetur
									</h4>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Main Container */}
			<section className="flex flex-col justify-center items-center rounded-2xl text-white gap-6 bg-emerald-950 p-10 min-h-[80vh] mx-4 my-4 text-center overflow-hidden relative">
				{/* Text Content */}
				<h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight tracking-tight max-w-4xl">
					Transform With the Leading AI Contact <br /> Center Platform
				</h1>

				<p className="text-gray-400 text-sm md:text-base mb-10 tracking-wide">
					Together, let's shape the future of customer interactions.
				</p>

				{/* Buttons Container */}
				<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full">
					{/* Button 1: See a Demo (Gradient Border Effect) */}
					{/* ترفند: یک دیو با پس‌زمینه گرادینت که کمی بزرگتر است نقش حاشیه را بازی می‌کند */}
					<button className="group relative inline-flex items-center justify-center p-px overflow-hidden rounded-full transition-transform active:scale-95 hover:scale-105 duration-200">
						<span className="absolute inset-0 bg-linear-to-r from-purple-600 via-purple-400 to-emerald-400"></span>
						<span className="relative block px-8 py-3 bg-[#031813] rounded-full text-white text-sm font-semibold tracking-wide group-hover:bg-opacity-90 transition-all">
							See a Demo
						</span>
					</button>

					{/* Button 2: Contact Us (Solid White) */}
					<button className="px-8 py-3 rounded-full bg-white text-[#031813] text-sm font-bold tracking-wide hover:bg-gray-200 transition-colors duration-200 active:scale-95 hover:scale-105">
						Contact Us
					</button>
				</div>

				{/* Optional: Subtle Glow Effect (برای زیبایی بیشتر شبیه به طراحی‌های مدرن) */}
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>
			</section>
		</div>
	);
}

export default Home;
