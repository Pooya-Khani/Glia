import Button from "../components/Button";

function AboutUs() {
	return (
		<div className="bg-white">
			<section className="min-h-screen rounded-2xl bg-[url('/about/hero-bg.png')] bg-cover bg-center bg-no-repeat text-white mx-4 my-4 font-sans relative overflow-hidden flex flex-col">
				{/* --- Main Content Area --- */}
				<div className="flex-1 container mx-auto px-6 py-12 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
					{/* --- Left Column: Text Content --- */}
					<div className="w-full lg:w-1/2 flex flex-col items-start z-10">
						{/* Badge */}
						<div className="inline-block px-5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase mb-8 shadow shadow-white">
							About Us
						</div>

						{/* Heading */}
						<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.1] mb-8 tracking-tight">
							The U.S. Foreign-Trade Zone Research & Policy Institute
						</h1>

						{/* Description */}
						<p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl text-justify lg:text-left">
							The U.S. Foreign-Trade Zone Research & Policy Institute is
							established as a specialized, research-driven, and non-profit
							entity dedicated to enhancing the role and effectiveness of
							Foreign-Trade Zones (FTZs) within the structure of the American
							national economy. FTZs are the U.S. equivalent of international
							Free Trade Zones, operating with a focus on encouraging domestic
							production and export competitiveness.
						</p>
					</div>

					{/* --- Right Column: Image Placeholder --- */}
					<div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
						{/* 
              این باکس سفید بزرگ است.
              اگر می‌خواهید داخلش عکس بگذارید:
              1. کلاس bg-white را بردارید (یا نگه دارید اگر عکس ترنسپرنت است)
              2. تگ img داخلش بگذارید یا استایل background-image بدهید.
            */}
						<div className="w-full max-w-[600px] aspect-square lg:aspect-5/4 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden relative">
							{/* Placeholder Text - وقتی عکس گذاشتید این دیو را پاک کنید */}
							<div className="absolute inset-0 flex items-center justify-center text-gray-300">
								<span className="text-lg font-medium">
									Image / Content Area
								</span>
							</div>

							{/* مثال استفاده از عکس (کامنت شده) */}
							{/* <img src="/your-image.jpg" alt="About illustration" className="w-full h-full object-cover" /> */}
						</div>
					</div>
				</div>
			</section>
			{/*  */}
			<section className="mx-4 my-4 bg-white py-12 px-4 md:px-8 font-sans">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Card 1 */}
						<div className="bg-white border border-gray-100 rounded-4xl p-8 shadow-lg flex flex-col items-start hover:shadow-xl transition-shadow h-full">
							{/* Icon Container */}
							<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-6">
								{/* --- ICON SLOT --- */}
								<img
									src="/about/user-icon.png"
									alt="Icon"
									className="w-20 h-20 object-contain"
								/>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								The Glia Difference: Why Leaders Trust Us
							</h3>
							<a
								href="#"
								className="text-black font-bold text-sm flex items-center gap-2 mt-auto group"
							>
								See What Makes Us Different
								<img
									className="w-6 h-6"
									src="/services/arrow-icon.png"
									alt="icon"
								/>
							</a>
						</div>

						{/* Card 2 */}
						<div className="bg-white border border-gray-100 rounded-4xl p-8 shadow-lg flex flex-col items-start hover:shadow-xl transition-shadow h-full">
							{/* Icon Container */}
							<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-6">
								{/* --- ICON SLOT --- */}
								<img
									src="/about/headphone-icon.png"
									alt="Icon"
									className="w-20 h-20 object-contain"
								/>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Solutions That Drive Real Impact
							</h3>
							<a
								href="#"
								className="text-black font-bold text-sm flex items-center gap-2 mt-auto group"
							>
								Read Our Success Stories
								<img
									className="w-6 h-6"
									src="/services/arrow-icon.png"
									alt="icon"
								/>
							</a>
						</div>
					</div>
				</div>
			</section>
			{/*  */}
			<section className="py-16 px-4 md:px-8 font-sans mx-4 my-4">
				<div className="max-w-7xl mx-auto flex flex-col items-center">
					{/* Header Area */}
					<div className="bg-stone-300 text-black text-[10px] font-bold px-3 py-1.5 rounded-full tracking-widest uppercase mb-6">
						Our Success Story
					</div>

					<h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-[#031813] mb-12 max-w-3xl leading-tight">
						Production of Research and Statistical Content
					</h2>

					{/* Main Content Box */}
					<div className="w-full bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
						{/* --- LEFT SIDE: Text Content --- */}
						<div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">
								Driven To Deliver It All
							</h3>
							<p className="text-gray-600 leading-relaxed text-sm md:text-base">
								For too long, delivering high-quality customer service has
								required heavy investments in headcount. Those days are over.
								Glia unifies AI, human, voice, and digital so organizations in
								highly regulated industries can finally end the efficiency vs.
								experience tradeoff.
							</p>
						</div>

						{/* --- RIGHT SIDE: Statistics (Beige Background) --- */}
						<div className="w-full lg:w-1/2 bg-[#fff3e9] p-8 md:p-12 lg:p-16">
							<div className="space-y-8">
								{/* Stat Item 1 */}
								<div className="flex items-center justify-between border-b border-gray-300/50 pb-2 last:border-0 last:pb-0">
									<div className="flex items-center gap-3">
										{/* --- ICON SLOT --- */}
										<img
											src="/about/icon-1.png"
											alt="Icon"
											className="w-5 h-5"
										/>
										<span className="font-bold text-gray-800 text-sm md:text-base">
											Founded in New York City
										</span>
									</div>
									<span className="text-2xl font-bold text-black">2012</span>
								</div>

								{/* Stat Item 2 */}
								<div className="flex items-center justify-between border-b border-gray-300/50 pb-2 last:border-0 last:pb-0">
									<div className="flex items-center gap-3">
										{/* --- ICON SLOT --- */}
										<img
											src="/about/icon-2.png"
											alt="Icon"
											className="w-5 h-5"
										/>
										<span className="font-bold text-gray-800 text-sm md:text-base">
											Languages spoken in our offices
										</span>
									</div>
									<span className="text-2xl font-bold text-black">18</span>
								</div>

								{/* Stat Item 3 */}
								<div className="flex items-center justify-between border-b border-gray-300/50 pb-2 last:border-0 last:pb-0">
									<div className="flex items-center gap-3">
										{/* --- ICON SLOT --- */}
										<img
											src="/about/icon-3.png"
											alt="Icon"
											className="w-5 h-5"
										/>
										<span className="font-bold text-gray-800 text-sm md:text-base">
											Countries represented by our employees
										</span>
									</div>
									<span className="text-2xl font-bold text-black">35</span>
								</div>

								{/* Stat Item 4 */}
								<div className="flex items-center justify-between border-b border-gray-300/50 pb-2 last:border-0 last:pb-0">
									<div className="flex items-center gap-3">
										{/* --- ICON SLOT --- */}
										<img
											src="/about/icon-4.png"
											alt="Icon"
											className="w-5 h-5"
										/>
										<span className="font-bold text-gray-800 text-sm md:text-base">
											Successful interactions
										</span>
									</div>
									<span className="text-2xl font-bold text-black">10B+</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*  */}
			<section className="bg-emerald-950 py-20 md:py-32 rounded-2xl px-6 md:px-12 mx-4 my-4 font-sans min-h-screen flex items-center">
				<div className="max-w-7xl mx-auto w-full">
					{/* کانتینری که محتوا را در بر می‌گیرد */}
					<div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
						<div className="flex flex-col items-start max-w-3xl">
							<h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
								Key Missions and Objectives
							</h2>
							<p className="text-stone-300 text-sm md:text-base leading-relaxed text-justify md:text-left max-w-2xl">
								The primary mission of the Institute is to promote and develop
								the potential of Foreign-Trade Zones through innovative research
								and policy approaches.
							</p>
						</div>
						<div className="flex flex-col items-start max-w-3xl">
							<h4 className="text-white text-[20px] font-bold mb-6 tracking-tight">
								Production of Research and Statistical Content
							</h4>
							<p className="text-stone-300 w-96 text-xs md:sm leading-relaxed text-justify md:text-left max-w-2xl">
								The Institute continuously engages in the analysis of up-to-date
								data and statistics on the performance of FTZs across all 50
								U.S. states. These reports, which include figures on investment
								volume, re-export volume, and the zones' contribution to Gross
								Domestic Product (GDP), serve as the basis for future
								policymaking.
							</p>
						</div>
						<div className="flex flex-col items-start max-w-3xl">
							<h4 className="text-white text-[20px] font-bold mb-6 tracking-tight">
								Advancing the "Made in America" Brand
							</h4>
							<p className="text-stone-300 w-96 text-xs md:sm leading-relaxed text-justify md:text-left max-w-2xl">
								One of our central goals is to highlight the FTZs' role in
								producing high value-added final goods. We actively promote
								campaigns to place high-quality "Made in America" products in
								priority for domestic and international consumers. We also
								assist startups and innovative businesses in utilizing the
								zones' benefits to achieve global prominence.
							</p>
						</div>
						<div className="flex flex-col items-start max-w-3xl">
							<h4 className="text-white text-[20px] font-bold mb-6 tracking-tight">
								Attracting Investment and Public Awareness
							</h4>
							<p className="text-stone-300 w-96 text-xs md:sm leading-relaxed text-justify md:text-left max-w-2xl">
								Through conferences, specialized publications, and online
								platforms, the Institute strives to introduce the benefits and
								advantages of FTZs to the general public, policymakers, and
								international investors. We are committed to encouraging global
								investors to establish and operate within these secure and
								stable zones to create sustainable employment and facilitate
								technology transfer.
							</p>
						</div>
						<div className="flex flex-col items-start max-w-3xl">
							<h4 className="text-white text-[20px] font-bold mb-6 tracking-tight">
								Creation of New Ideas and Synergy
							</h4>
							<p className="text-stone-300 w-96 text-xs md:sm leading-relaxed text-justify md:text-left max-w-2xl">
								We aim to create new economic models for FTZs. Furthermore,
								through specialized workshops and conferences, we strengthen
								synergy and the exchange of successful experiences among the
								managers and operators of U.S. Foreign-Trade Zones.
							</p>
						</div>
					</div>
				</div>
			</section>
			{/*  */}
			<section className="mx-4 my-4 bg-orange-50 rounded-2xl py-16 md:py-20 px-6 md:px-12 font-sans">
				<div className="max-w-6xl mx-auto">
					{/* --- Image Placeholder Area --- */}
					{/* 
            برای گذاشتن عکس:
            1. کلاس 'bg-white' را حذف کن.
            2. تگ <img> را آنکامنت کن و آدرس عکس را بده.
            3. یا کلاس 'bg-[url(...)]' را به div بده.
        */}
					<div className="w-full h-64 md:h-[500px] bg-white rounded-2xl shadow-sm overflow-hidden relative mb-16 md:mb-20">
						{/* <img 
            src="/path/to/your-image.jpg" 
            alt="Team working" 
            className="w-full h-full object-cover"
           /> */}

						{/* متن راهنما (پاک شود) */}
						<div className="absolute inset-0 flex items-center justify-center text-gray-300 text-lg font-medium">
							Image Placeholder (1200x600)
						</div>
					</div>

					{/* --- Text Content Area --- */}
					<div className="flex flex-col items-center">
						{/* Heading */}
						<h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-black mb-6">
							Customer-First From The Start
						</h2>

						{/* Subheading */}
						<p className="text-black w-md text-center text-base md:text-md max-w-2xl mb-12 md:mb-16 leading-relaxed">
							Customer service has been at the heart of our mission since the
							very beginning.
						</p>

						{/* Two Column Text Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-sm md:text-[15px] leading-loose text-gray-700 text-justify md:text-left">
							{/* Column 1 */}
							<div className="space-y-5">
								<p>
									Glia's journey began in 2012 when our founders were growth
									consultants for a Fortune 50 retailer. After identifying
									superior in-person customer service as their client's main
									competitive advantage, they wondered, "How can we replicate
									this same, winning experience online?" And so Glia was born.
								</p>
								<p>
									Our founders set out to build a unified platform from the
									ground up. The result is a visionary, AI-driven approach to
									customer interactions that has earned industry awards and,
									more importantly, glowing results from customers.
								</p>
								<p>
									Interaction technology is our passion, but customer service is
									in our DNA. We go above and beyond to deliver for our clients
									throughout every step of the relationship—so they can do the
									same for their customers.
								</p>
							</div>

							{/* Column 2 */}
							<div className="space-y-5">
								<p>
									We know that great technology means little without great
									people to support it. That's why the Glia team brings decades
									of experience from across financial services and high-growth
									SaaS industries. We're proud of our diverse, growing team with
									their dedication and passion for engineering and supporting
									our ambitious vision.
								</p>
								<p>
									Glineers work hard, communicate openly, and support each other
									(and our clients) fiercely. We hold ourselves to high
									standards and strong values, including those core values we
									call CHAMP.
								</p>
								<p>
									We're committed to exemplifying these values in every aspect
									of Glia, from our technology to our emphasis on caring for our
									clients, partners, and employees. Sound like the right fit for
									you? Check out our career opportunities.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="max-w-7xl mx-auto grid grid-cols-1 mt-16 md:grid-cols-3 gap-6">
					{/* --- کارت اول: Dan Michaeli --- */}
					<div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm">
						{/* جای خالی عکس (Placeholder) */}
						<div className="flex-1 w-full bg-gray-200">
							{/* اینجا بعدا تگ img قرار میگیرد */}
						</div>

						{/* بخش متن */}
						<div className="p-5 bg-white text-left">
							<h3 className="text-lg font-extrabold text-black">
								Dan Michaeli
							</h3>
							<p className="text-xs text-black mt-1 font-medium">
								Chief Executive Officer & Co-Founder
							</p>
						</div>
					</div>

					{/* --- کارت دوم: Carlos Paniagua --- */}
					<div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm">
						{/* جای خالی عکس (Placeholder) */}
						<div className="flex-1 w-full bg-gray-200">
							{/* اینجا بعدا تگ img قرار میگیرد */}
						</div>

						{/* بخش متن */}
						<div className="p-5 bg-white text-left">
							<h3 className="text-lg font-extrabold text-black">
								Carlos Paniagua
							</h3>
							<p className="text-xs text-black mt-1 font-medium">
								Chief Technology Officer & Co-Founder
							</p>
						</div>
					</div>

					{/* --- کارت سوم: Justin DiPietro --- */}
					<div className="flex flex-col bg-white h-[500px] rounded-2xl overflow-hidden shadow-sm">
						{/* جای خالی عکس (Placeholder) */}
						<div className="flex-1 w-full bg-gray-200">
							{/* اینجا بعدا تگ img قرار میگیرد */}
						</div>

						{/* بخش متن */}
						<div className="p-5 bg-white text-left">
							<h3 className="text-lg font-extrabold text-black">
								Justin DiPietro
							</h3>
							<p className="text-xs text-black mt-1 font-medium">
								Chief Strategy Officer & Co-Founder
							</p>
						</div>
					</div>
				</div>
			</section>
			{/*  */}
			<section className="mx-4 my-4 py-16 px-4 sm:px-8 overflow-hidden">
				<div className="max-w-7xl mx-auto">
					{/* --- Header Section --- */}
					<div className="text-center mb-16">
						<span className="inline-block bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
							Culture
						</span>
						<h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
							Culture That Measures Up
						</h2>
						<p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-lg leading-relaxed">
							The U.S. FTZ Research & Policy Institute is dedicated to
							transforming FTZs into hubs for innovation, competitiveness, and
							sustainable growth in the era of the global economy.
						</p>
					</div>

					{/* --- Middle Section: Comparison --- */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
						{/* Left Side: Certification & Text */}
						<div className=" px-4 py-8">
							<div className="flex flex-col sm:flex-row items-start gap-6">
								{/* --- بخش لوگو (سمت چپ) --- */}
								<div className="shrink-0">
									{/* اگر عکس واقعی دارید، کد زیر را فعال کنید و بخش CSS پایین را پاک کنید */}
									{/* <img src="/path-to-logo.png" alt="Certified" className="w-20 h-auto" /> */}

									{/* شبیه‌سازی لوگو با CSS (اگر عکس ندارید) */}
									<div className="w-[85px] shadow-sm">
										{/* قسمت قرمز */}
										<div className="bg-[#ff4b4b] text-white p-2 text-[10px] font-bold leading-tight tracking-tighter h-[60px]">
											Great
											<br />
											Place
											<br />
											To
											<br />
											Work<span className="align-top text-[6px] ml-0.5">®</span>
										</div>
										{/* قسمت آبی */}
										<div className="bg-[#0b2341] text-white p-1 text-center relative h-[45px]">
											<div className="text-[9px] font-bold uppercase">
												Certified
											</div>
											<div className="text-[6px] opacity-80 mt-0.5">
												MAY 2024-MAY 2025
											</div>
											<div className="text-[7px] font-bold mt-0.5">USA</div>
											{/* مثلث پایین لوگو */}
											<div
												className="absolute top-full left-0 w-full h-4 bg-[#0b2341]"
												style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
											></div>
										</div>
									</div>
								</div>

								{/* --- بخش متن و دکمه (سمت راست) --- */}
								<div className="flex flex-col items-start">
									{/* متن توضیحات */}
									<p className="text-black text-xs sm:text-sm font-medium leading-relaxed mb-6">
										89% of Glia employees say it is a great place to work,
										compared to 57% of employees at a typical U.S.-based
										company.
									</p>

									{/* دکمه سبز */}
									<Button customClass="bg-lime-500 text-neutral-800 py-2.5 px-8 border-none hover:bg-neutral-800 hover:text-white hover:shadow hover:shadow-lime-400 font-bold">
										Join Us
									</Button>
								</div>
							</div>
						</div>

						{/* Right Side: Progress Bars */}
						<div className="flex flex-col gap-6 w-full">
							{/* Bar 1: Glia */}
							<div className="flex items-center w-full">
								{/* The Bar */}
								<div className="relative grow h-14 bg-gray-100 rounded-l-md overflow-hidden">
									<div
										className="absolute top-0 left-0 h-full bg-[#a020f0] flex items-center px-4"
										style={{ width: "89%" }}
									>
										<span className="text-white font-bold text-lg">Glia</span>
									</div>
								</div>
								{/* The Number */}
								<div className="w-24 h-14 bg-fuchsia-950 flex items-center justify-center rounded-md ml-1">
									<span className="text-white font-bold text-xl">89%</span>
								</div>
							</div>

							{/* Bar 2: Typical Company */}
							<div className="flex items-center w-full">
								{/* The Bar */}
								<div className="relative grow h-14 bg-gray-100 rounded-l-md overflow-hidden">
									<div
										className="absolute top-0 left-0 h-full bg-gray-200 flex items-center px-4"
										style={{ width: "57%" }}
									>
										<span className="text-black font-bold text-lg">
											Typical Company
										</span>
									</div>
								</div>
								{/* The Number */}
								<div className="w-24 h-14 bg-fuchsia-950 flex items-center justify-center rounded-md ml-1">
									<span className="text-white font-bold text-xl">57%</span>
								</div>
							</div>

							<p className="text-xs ml-4 text-black mt-2">
								Source: Great Place to Work® 2024 Global Employee Engagement
								Study.
							</p>
						</div>
					</div>

					{/* --- Bottom Section: Stats Bar (Purple 950) --- */}
					<div className="bg-fuchsia-950 rounded-3xl px-6 py-12 md:py-16">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 lg:divide-x divide-purple-900/50">
							{/* Stat 1 */}
							<div className="flex flex-col items-center px-2 pt-4 sm:pt-0">
								<span className="text-4xl md:text-5xl font-bold text-white mb-3">
									99%
								</span>
								<p className="text-purple-200 text-xs md:text-sm max-w-[150px]">
									feel welcome when they join the Glia.
								</p>
							</div>

							{/* Stat 2 */}
							<div className="flex flex-col items-center px-2 pt-4 sm:pt-0">
								<span className="text-4xl md:text-5xl font-bold text-white mb-3">
									95%
								</span>
								<p className="text-purple-200 text-xs md:text-sm max-w-[150px]">
									believe Gliaers are entrusted with real responsibility.
								</p>
							</div>

							{/* Stat 3 */}
							<div className="flex flex-col items-center px-2 pt-4 sm:pt-0">
								<span className="text-4xl md:text-5xl font-bold text-white mb-3">
									94%
								</span>
								<p className="text-purple-200 text-xs md:text-sm max-w-[150px]">
									say management is competent at running the business.
								</p>
							</div>

							{/* Stat 4 */}
							<div className="flex flex-col items-center px-2 pt-4 sm:pt-0">
								<span className="text-4xl md:text-5xl font-bold text-white mb-3">
									93%
								</span>
								<p className="text-purple-200 text-xs md:text-sm max-w-[150px]">
									believe management is honest and ethical in its business
									practices.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*  */}
			<section className="mx-4 my-4 py-16 px-4 sm:px-8">
				<div className="max-w-7xl mx-auto">
					{/* --- Header Section --- */}
					<div className="mb-12">
						<span className="inline-block bg-stone-300 text-stone-600 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
							Our CCHAMP Values
						</span>
						<h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black">
							Our Winning Mindset Begins Within
						</h2>
					</div>

					{/* --- Content Grid --- */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
						{/* Left Column: Image Placeholder */}
						<div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-gray-400 rounded-3xl shadow-sm">
							{/* 
               هر زمان خواستید عکس بگذارید، کد زیر را جایگزین این div کنید:
               <img src="لینک_عکس" alt="Values" className="w-full h-full object-cover rounded-3xl" />
             */}
						</div>

						{/* Right Column: Values List */}
						<div className="flex flex-col space-y-8 mt-4 lg:mt-0">
							{/* 1. Collaborate (Active Item) */}
							<div className="flex gap-4 items-start">
								{/* Green Dot */}
								<div className="mt-2 shrink-0 w-3 h-3 bg-[#84cc16] rounded-full shadow-[0_0_0_4px_rgba(132,204,22,0.2)]"></div>

								<div className="flex flex-col">
									<h3 className="text-xl font-bold text-gray-900 mb-3">
										Collaborate
									</h3>
									<p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
										<span className="font-bold text-gray-800">
											Stronger together.
										</span>{" "}
										We're an extraordinarily collaborative team, and we view
										interdepartmental teamwork as our core competitive
										advantage. Every win is a team win. You'll never hear
										"that's not my job."
									</p>
									<p className="text-sm sm:text-base text-gray-600 leading-relaxed">
										Each one, teach one. We're natural mentors and enthusiastic
										coaches. We're happy to teach and eager to tap into our team
										members' unique perspectives. With team members from 10+
										countries and multiple fields of study, we create space
										regularly to collaborate and learn from each other both
										personally and professionally.
									</p>
								</div>
							</div>

							{/* 2. Challenge (Inactive Item) */}
							<div className="flex gap-4 items-center group cursor-pointer">
								{/* Hollow Dot */}
								<div className="shrink-0 w-3 h-3 border-2 border-gray-300 rounded-full group-hover:border-gray-400 transition-colors"></div>
								<h3 className="text-lg font-bold text-gray-400 group-hover:text-gray-600 transition-colors">
									Challenge
								</h3>
							</div>

							{/* 3. Master (Inactive Item) */}
							<div className="flex gap-4 items-center group cursor-pointer">
								<div className="shrink-0 w-3 h-3 border-2 border-gray-300 rounded-full group-hover:border-gray-400 transition-colors"></div>
								<h3 className="text-lg font-bold text-gray-400 group-hover:text-gray-600 transition-colors">
									Master
								</h3>
							</div>

							{/* 4. Persevere (Inactive Item) */}
							<div className="flex gap-4 items-center group cursor-pointer">
								<div className="shrink-0 w-3 h-3 border-2 border-gray-300 rounded-full group-hover:border-gray-400 transition-colors"></div>
								<h3 className="text-lg font-bold text-gray-400 group-hover:text-gray-600 transition-colors">
									Persevere
								</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default AboutUs;
