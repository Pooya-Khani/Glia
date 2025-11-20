function FreeTradeZonesClub() {
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
			<section className="w-full bg-fuchsia-950 px-6 py-16 font-sans md:px-12 md:py-24">
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
		</div>
	);
}

export default FreeTradeZonesClub;
