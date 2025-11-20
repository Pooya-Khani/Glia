import { useState } from "react";

function FreeTradeZonesClub() {
	// داده‌های هر کارت (لوگو و متن مخصوص خودش)
	// فقط کافیه لینک عکس رو داخل logoSrc بذاری
	const partners = [
		{
			id: 1,
			name: "Alkami",
			logoSrc: "/trade-club/logo-1.png", // لینک لوگو Alkami اینجا
			text: "Offer self-serve customers love, help reps work at hyperspeed, and let leaders access game-changing insights.",
		},
		{
			id: 2,
			name: "Candescent",
			logoSrc: "/trade-club/logo-2.png", // لینک لوگو Candescent اینجا
			text: "Take digital-first service to the next level by adding Glia's AI-powered tools to your Candescent platform.",
		},
		{
			id: 3,
			name: "CU Answers",
			logoSrc: "/trade-club/logo-3.png", // لینک لوگو CU Answers اینجا
			text: "Add Glia AI to your CU*Answers platform and supercharge your efficiency while enhancing the service your members love.",
		},
		{
			id: 4,
			name: "Q2",
			logoSrc: "/trade-club/logo-4.png", // لینک لوگو Q2 اینجا
			text: "Glia is one of several partners to be certified as a Q2 Strategic Reseller, making your implementation safe and fast.",
		},
		{
			id: 5,
			name: "Insurity",
			logoSrc: "/trade-club/logo-5.png", // لینک لوگو Insurity اینجا
			text: "Enhance your Insurity Interaction Platform with Glia so you can engage agents and policyholders via voice, chat, video, and AI.",
		},
		{
			id: 6,
			name: "Blend",
			logoSrc: "/trade-club/logo-6.png", // لینک لوگو Blend اینجا
			text: "Embed Glia into your Blend platform to guide borrowers within your application—boosting engagement, completion rates, and loyalty.",
		},
	];

	// این استیت مشخص می‌کند کدام آیتم باز است (به طور پیش‌فرض اولی: 0)
	const [openIndex, setOpenIndex] = useState(0);

	const handleToggle = (index) => {
		// اگر روی آیتم باز کلیک شد، می‌بنددش (null)، در غیر این صورت آن را باز می‌کند
		setOpenIndex(openIndex === index ? null : index);
	};

	const accordionItems = [
		{
			id: 1,
			title: "Light-Years Beyond CCaaS",
			content:
				"Glia's platform unifies digital, voice, and AI from the ground up, delivering the fully connected interactions other CCaaS vendors only claim to offer.",
		},
		{
			id: 2,
			title: "AI That Actually Works",
			// متن تولید شده مرتبط
			content:
				"Our AI solutions are pre-trained on industry-specific data to understand financial contexts instantly, ensuring accurate automated responses and seamless handoffs to human agents without the long learning curve.",
		},
		{
			id: 3,
			title: "Pricing Aligned to ROI",
			// متن تولید شده مرتبط
			content:
				"We believe in a partnership model where costs are predictable and transparent. Our pricing structure is designed to scale with your success, ensuring you see a tangible return on investment from day one.",
		},
		{
			id: 4,
			title: "Exceptional Partnership",
			// متن تولید شده مرتبط
			content:
				"Beyond the technology, you get a dedicated team of experts committed to your growth. From onboarding to ongoing optimization, we work alongside you to ensure your customer experience goals are met.",
		},
	];

	return (
		<div className="bg-white flex flex-col gap-4 mx-4 my-4">
			{/* Hero */}
			<section className="bg-orange-50 flex flex-col md:flex-row rounded-2xl items-center gap-10 px-6 py-10  lg:px-12 lg:py-20">
				{/* Left Text */}
				<div className="order-2 flex-6 flex flex-col items-start lg:order-1">
					<span className="rounded-full bg-[#E6DCD3] px-3 py-1.5 text-[10px] font-bold tracking-widest text-slate-600 uppercase">
						Partners & Integrations
					</span>

					<h1 className="mt-6 text-3xl font-extrabold leading-[1.1] text-[#1a1a1a] lg:text-4xl">
						Partnership That Powers The Best
					</h1>

					<p className="mt-6 text-lg leading-relaxed text-slate-600">
						In industries where trust is everything, the world's best companies
						trust Glia to enhance their customer experiences. Ready to join us?
					</p>
				</div>

				{/* HERO IMAGE */}
				<div className="order-1 flex-5 relative w-full lg:order-2">
					<div className="overflow-hidden rounded-2xl shadow-2xl">
						<img
							src="/trade-club/club-hero-img.png"
							alt="Hero"
							className="h-full w-full object-cover min-h-[300px] lg:min-h-[500px]"
						/>
					</div>
				</div>
			</section>
			{/*  */}
			<section className="rounded-2xl bg-fuchsia-950 px-6 py-16 font-sans md:px-12 md:py-24">
				<div className="mx-auto max-w-6xl">
					{/* --- Header Section --- */}
					<div className="mb-12">
						{/* Badge */}
						<span className="inline-block rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-1.5 text-[11px] font-bold tracking-widest text-purple-200 uppercase">
							Partnership Types
						</span>

						{/* Title */}
						<h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
							Better Business, Easier Integrations
						</h2>

						{/* Subtitle */}
						<p className="mt-4 max-w-2xl text-lg text-slate-300">
							Whether you're looking to grow your customer base or integrate
							Glia with your tech stack, we help you create connections that
							drive results.
						</p>
					</div>

					{/* --- Cards Grid --- */}
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						{/* Card 1: Channel Partners */}
						<div className="group flex flex-col overflow-hidden rounded-3xl bg-white p-4 transition-transform duration-300 hover:-translate-y-1">
							{/* Image Area */}
							<div className=" w-full overflow-hidden rounded-2xl">
								<img
									src="/trade-club/section-img-1.png"
									alt="Channel Partners"
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>

							{/* Text Content */}
							<div className="flex flex-1 flex-col p-4 pt-6">
								<h3 className="text-2xl font-bold text-slate-900">
									Channel Partners
								</h3>
								<p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
									Lead your customers to the future-forward interaction platform
									they've been waiting for—with a partner that has your back at
									every step.
								</p>

								{/* Link with Arrow */}
								<a
									href="#"
									className="mt-6 inline-flex items-center gap-2 font-bold text-black"
								>
									Partner with Glia
									<img
										src="/services/arrow-icon.png"
										alt="icon"
										className="w-6 h-6"
									/>
								</a>
							</div>
						</div>

						{/* Card 2: Integration Partners */}
						<div className="group flex flex-col overflow-hidden rounded-3xl bg-white p-4 transition-transform duration-300 hover:-translate-y-1">
							{/* Image Area */}
							<div className="w-full overflow-hidden rounded-2xl">
								<img
									src="/trade-club/section-img-2.png"
									alt="Integration Partners"
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>

							{/* Text Content */}
							<div className="flex flex-1 flex-col p-4 pt-6">
								<h3 className="text-2xl font-bold text-slate-900">
									Integration Partners
								</h3>
								<p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
									Elevate your interactions without the heavy lift. Our
									pre-built integrations with leading tech partners let you
									drive instant value instead of adding extra work.
								</p>

								{/* Link with Arrow */}
								<a
									href="#"
									className="mt-6 inline-flex items-center gap-2 font-bold text-black"
								>
									See Our Integrations
									<img
										src="/services/arrow-icon.png"
										alt="icon"
										className="w-6 h-6"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*  */}
			<section className="w-full py-16 px-5 bg-[#F9F9F7]">
				<div className="max-w-7xl mx-auto">
					{/* تیتر و توضیحات بالا */}
					<div className="mb-10">
						<h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
							Industry Leaders Go With Glia
						</h2>
						<p className="text-gray-600 max-w-3xl text-sm md:text-base">
							We work with leading companies from fintech to customer experience
							and everything in between. Our featured partners include:
						</p>
					</div>

					{/* گرید کارت‌ها - در موبایل 1 ستون، در دسکتاپ 2 ستون */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						{partners.map((item) => (
							<div
								key={item.id}
								className="bg-white p-2 rounded-xl shadow-sm flex min-h-40"
							>
								{/* سمت چپ: جای لوگو */}
								<div className="w-[35%] flex items-center justify-center p-4">
									<img
										src={item.logoSrc}
										alt={`${item.name} logo`}
										className="max-w-full h-auto object-contain max-h-12"
									/>
								</div>

								{/* سمت راست: متن با بک‌گراند نارنجی */}
								<div className="w-[65%] bg-orange-50 rounded-lg p-6 flex items-center">
									<p className="text-black font-bold text-sm leading-relaxed">
										{item.text}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/*  */}
			<section className="w-full py-16 px-6 bg-white">
				<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
					{/* --- بخش چپ: متن و توضیحات --- */}
					<div className="flex flex-col justify-start">
						{/* Badge */}
						<div className="mb-6">
							<span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
								Why Work With Glia
							</span>
						</div>

						{/* Heading */}
						<h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
							A Track Record You Can Trust
						</h2>

						{/* Paragraph */}
						<p className="text-gray-600 text-lg leading-relaxed">
							More than 600 organizations that prioritize security, compliance,
							and trusted relationships lean on Glia to deliver the seamless
							experiences their customers expect. Here's why you should, too.
						</p>
					</div>

					{/* --- بخش راست: آکاردئون --- */}
					<div className="flex flex-col">
						{accordionItems.map((item, index) => {
							const isOpen = openIndex === index;

							return (
								<div
									key={item.id}
									className="border-b border-gray-200 last:border-0"
								>
									<button
										onClick={() => handleToggle(index)}
										className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
									>
										{/* عنوان آیتم */}
										<span className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
											{item.title}
										</span>

										{/* آیکون (فلش) */}
										<div className="ml-4 shrink-0">
											{/* سورس عکس آیکون رو اینجا بده */}
											{/* کلاس rotate-180 باعث میشه وقتی بازه، آیکون بچرخه (اگه فلش باشه) */}
											<img
												src="/usa-trade/arrow-down-icon.png"
												alt="toggle icon"
												className={`w-4 h-4 object-contain transition-transform duration-300 ${
													isOpen ? "rotate-180" : ""
												}`}
											/>
										</div>
									</button>

									{/* محتوای بازشو */}
									<div
										className={`overflow-hidden transition-all duration-300 ease-in-out ${
											isOpen ? "max-h-48 opacity-100 mb-6" : "max-h-0 opacity-0"
										}`}
									>
										<p className="text-gray-600 text-base leading-relaxed pr-4">
											{item.content}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
			{/*  */}
			<section className="w-full py-16 px-5 bg-[#F9F9F7] flex items-center justify-center">
				<div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
					{/* --- بخش چپ: متن توضیحات --- */}
					<div className="lg:col-span-5 flex flex-col justify-start pt-6">
						<h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight leading-tight">
							Let’s Win Together
						</h2>
						<p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
							Your success is our priority. Get in touch to learn more about how
							we can drive better outcomes for your business, together.
						</p>
					</div>

					{/* --- بخش راست: فرم --- */}
					<div className="lg:col-span-7 bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100">
						<div className="mb-8">
							<h3 className="text-2xl font-bold text-gray-900 mb-2">
								Partner With Glia
							</h3>
							<p className="text-gray-500 text-sm">
								Please enter your info below
							</p>
						</div>

						<form className="space-y-5">
							{/* Company */}
							<div>
								<label className="block text-xs font-bold text-gray-400 mb-1 ml-1">
									<span className="text-pink-500 mr-1">*</span>Company
								</label>
								<input
									type="text"
									className="w-full bg-[#F3F1EF] border-none rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#7CE94C] focus:bg-white transition-all outline-none placeholder-gray-400"
								/>
							</div>

							{/* First Name & Last Name */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
								<div>
									<label className="block text-xs font-bold text-gray-400 mb-1 ml-1">
										<span className="text-pink-500 mr-1">*</span>First Name
									</label>
									<input
										type="text"
										className="w-full bg-[#F3F1EF] border-none rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#7CE94C] focus:bg-white transition-all outline-none"
									/>
								</div>
								<div>
									<label className="block text-xs font-bold text-gray-400 mb-1 ml-1">
										<span className="text-pink-500 mr-1">*</span>Last Name
									</label>
									<input
										type="text"
										className="w-full bg-[#F3F1EF] border-none rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#7CE94C] focus:bg-white transition-all outline-none"
									/>
								</div>
							</div>

							{/* Job Title */}
							<div>
								<label className="block text-xs font-bold text-gray-400 mb-1 ml-1">
									<span className="text-pink-500 mr-1">*</span>Job Title
								</label>
								<input
									type="text"
									className="w-full bg-[#F3F1EF] border-none rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#7CE94C] focus:bg-white transition-all outline-none"
								/>
							</div>

							{/* Phone Number */}
							<div>
								<label className="block text-xs font-bold text-gray-400 mb-1 ml-1">
									<span className="text-pink-500 mr-1">*</span>Phone Number
								</label>
								<input
									type="tel"
									className="w-full bg-[#F3F1EF] border-none rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#7CE94C] focus:bg-white transition-all outline-none"
								/>
							</div>

							{/* Email Address */}
							<div>
								<label className="block text-xs font-bold text-gray-400 mb-1 ml-1">
									<span className="text-pink-500 mr-1">*</span>Email Address
								</label>
								<input
									type="email"
									className="w-full bg-[#F3F1EF] border-none rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#7CE94C] focus:bg-white transition-all outline-none"
								/>
							</div>

							{/* Select: Partnership Type */}
							<div>
								<label className="block text-xs font-bold text-gray-400 mb-1 ml-1">
									<span className="text-pink-500 mr-1">*</span>Type of
									partnership request
								</label>
								<div className="relative">
									<select className="w-full bg-[#F3F1EF] border-none rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#7CE94C] focus:bg-white transition-all outline-none appearance-none cursor-pointer">
										<option value="" disabled selected>
											Select...
										</option>
										<option value="tech">Technology Partner</option>
										<option value="reseller">Reseller / Distributor</option>
										<option value="referral">Referral Partner</option>
										<option value="strategic">Strategic Alliance</option>
									</select>
									{/* آیکون سفارشی فلش برای سلکت */}
									<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
										<svg
											className="w-4 h-4 text-gray-500"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M19 9l-7 7-7-7"
											></path>
										</svg>
									</div>
								</div>
							</div>

							{/* Select: Organization Type */}
							<div>
								<label className="block text-xs font-bold text-gray-400 mb-1 ml-1">
									<span className="text-pink-500 mr-1">*</span>About your
									organization
								</label>
								<div className="relative">
									<select className="w-full bg-[#F3F1EF] border-none rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#7CE94C] focus:bg-white transition-all outline-none appearance-none cursor-pointer">
										<option value="" disabled selected>
											Select...
										</option>
										<option value="bank">Bank</option>
										<option value="credit_union">Credit Union</option>
										<option value="fintech">Fintech Company</option>
										<option value="insurance">Insurance Provider</option>
										<option value="other">Other</option>
									</select>
									<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
										<svg
											className="w-4 h-4 text-gray-500"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M19 9l-7 7-7-7"
											></path>
										</svg>
									</div>
								</div>
							</div>

							{/* Textarea: Details */}
							<div>
								<label className="block text-xs font-bold text-gray-400 mb-1 ml-1">
									<span className="text-pink-500 mr-1">*</span>Details of your
									request
								</label>
								<textarea
									rows="4"
									className="w-full bg-[#F3F1EF] border-none rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#7CE94C] focus:bg-white transition-all outline-none resize-none"
								></textarea>
							</div>

							<div className="pt-4">
								<button
									type="button"
									className="bg-[#7CE94C] hover:bg-[#6cd140] text-black font-bold text-sm px-10 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer w-full md:w-auto"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
}

export default FreeTradeZonesClub;
