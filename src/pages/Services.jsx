import Button from "../components/Button";
import BrandsCarousel from "../components/BrandsCarousel";

function Services() {
	return (
		<div className="bg-white">
			<section className="flex justify-center items-center bg-orange-50 mx-4 my-8 rounded-xl">
				<div className="flex flex-col justify-center px-10 gap-3">
					<span className="w-fit bg-stone-300 rounded-full px-3 font-semibold">
						Priceless Pricing™
					</span>
					<h1 className="font-bold text-3xl w-72">
						A New Way to Pay: Priceless Pricing™
					</h1>
					<p>
						Stop paying more for being efficient. Glia’s transparent,
						predictable pricing supports automation and scales with your
						evolving needs.
					</p>
					<Button customClass="font-bold text-black w-fit">Get Started</Button>
				</div>
				<div className="flex relative rounded-2xl p-10">
					<img
						src="/services/services-hero.png"
						alt="Services Hero Image"
						className="w-full object-cover rounded-[50px] p-10"
					/>
					<div className="flex flex-col gap-2 absolute top-40 left-0 bg-[url(/services/services-hero-bg.png)]  bg-cover bg-center bg-no-repeat justify-center items-center rounded-3xl p-5 px-8 text-white">
						<span className="flex items-center justify-center w-fit text-3xl font-bold">
							0$
						</span>
						<span className="flex items-center justify-center w-fit text-xs ">
							per minute
						</span>
					</div>
					<div className="flex flex-col gap-2 absolute top-10 right-16 bg-[url(/services/services-hero-bg.png)]  bg-cover bg-center bg-no-repeat justify-center items-center rounded-3xl p-5 px-8 text-white">
						<span className="flex items-center justify-center w-fit text-3xl font-bold">
							0$
						</span>
						<span className="flex items-center justify-center w-fit text-xs ">
							per minute
						</span>
					</div>
					<div className="flex flex-col gap-2 absolute bottom-6 right-30 bg-[url(/services/services-hero-bg.png)]  bg-cover bg-center bg-no-repeat justify-center items-center rounded-3xl p-5 px-8 text-white">
						<span className="flex items-center justify-center w-fit text-3xl font-bold">
							0$
						</span>
						<span className="flex items-center justify-center w-fit text-xs ">
							per minute
						</span>
					</div>
				</div>
			</section>

			<BrandsCarousel />

			<section className="bg-[url(/services/section-bg.png)] flex flex-col gap-8 px-20 py-28 mx-4 my-6 rounded-2xl justify-center items-center text-right text-white">
				<h3 className="text-3xl w-4xl">
					When you cut handle time, improve routing, and scale automation, your
					bill shouldn't go up.
				</h3>
				<p className="text-[14px] w-4xl">
					Glia frees you from the usage fees and per-seat contracts inhibiting
					your ROI. With one fixed price, you enjoy unlimited usage, all the
					power of AI, and no seat limits. You drive efficiency. We clear the
					path for growth.Vendors with per-seat pricing models profit from your
					inefficiency. You deserve better. That’s why we’ve created Priceless
					Pricing™—a revolutionary and refreshingly transparent pricing model
					designed to encourage growth, not restrict it.
				</p>
			</section>

			<section className="flex my-8 mx-32 gap-20">
				<div className="flex flex-col gap-5 w-[600px]">
					<h3 className="font-bold text-3xl">Designed to Drive ROI</h3>
					<p>
						Vendors with per-seat pricing models profit from your inefficiency.
						You deserve better. That’s why we’ve created Priceless Pricing™—a
						revolutionary and refreshingly transparent pricing model designed to
						encourage growth, not restrict it.
					</p>
					<div className="flex flex-col gap-2">
						<div className="flex items-center gap-2">
							<img src="/services/list-icon.png" alt="list icon" />
							<span className="text-[14px]">
								Everything you need comes standard: unlimited seats, unlimited
								usage, and AI built in.
							</span>
						</div>
						<div className="flex items-center gap-2">
							<img src="/services/list-icon.png" alt="list icon" />
							<span className="text-[14px]">
								Everything you need comes standard: unlimited seats, unlimited
								usage, and AI built in.
							</span>
						</div>
						<div className="flex items-center gap-2">
							<img src="/services/list-icon.png" alt="list icon" />
							<span className="text-[14px]">
								Everything you need comes standard: unlimited seats, unlimited
								usage, and AI built in.
							</span>
						</div>
					</div>
				</div>
				<div className="bg-orange-50 flex flex-col gap-6 justify-center items-center p-8">
					<span class="w-fit bg-stone-300 rounded-full px-3 font-medium">
						CUSTOMER CENTRIC
					</span>
					<h3 className="font-bold text-2xl">Priceless Pricing TM</h3>
					<p className="text-xs">
						No nickel & diming. Just simple, clear, pricing aligned to ROI.
					</p>
					<div className="flex gap-2">
						<div className="bg-white rounded-3xl text-right">
							<div className="m-6 px-6 flex flex-col ">
								<span className="font-bold text-[18px]">0$</span>
								<span className="text-xs text-nowrap">per minute</span>
							</div>
						</div>
						<div className="bg-white rounded-3xl text-right">
							<div className="m-6 px-6 flex flex-col">
								<span className="font-bold text-[18px]">0$</span>
								<span className="text-xs text-nowrap">per seat</span>
							</div>
						</div>
						<div className="bg-white rounded-3xl text-right">
							<div className="m-6 px-6 flex flex-col">
								<span className="font-bold text-[18px]">0$</span>
								<span className="text-xs text-nowrap">per token</span>
							</div>
						</div>
					</div>
					<Button customClass="font-bold text-black w-full">Get Started</Button>
				</div>
			</section>

			<section className="flex flex-col gap-4 py-12 mx-4 my-6 rounded-2xl justify-center items-center bg-orange-50">
				<span className="w-fit bg-stone-300 rounded-full px-3 font-semibold">
					THE GLIA ADVANTAGE
				</span>
				<h3 className="font-bold text-3xl">
					Tailor Pricing to Your Actual Needs
				</h3>
				<p>
					Select from flexible tiers based on your supported channels,
					automation goals, growth stage, and industry needs—so pricing works
					with you, not against you.
				</p>
				<div className="flex items-end gap-4 my-8 px-20 w-full">
					<div className="bg-white flex-1 rounded-2xl">
						<div className="py-12 px-8">Unlimited Seats</div>
						<div className="py-12 px-8">Unlimited Usage</div>
						<div className="py-12 px-8">Built-In AI</div>
						<div className="py-12 px-8">Fixed Price</div>
					</div>
					<div className="bg-fuchsia-950 flex-2 rounded-2xl text-white flex flex-col items-center justify-center">
						<div className="py-12 px-8">Glia</div>
						<div className="flex flex-col items-center justify-center gap-2 py-6 px-8">
							<img
								className="w-11"
								src="/services/list-icon.png"
								alt="List Icon"
							/>
							No tracking, no scaling penalties.
						</div>
						<div className="flex flex-col items-center justify-center gap-2 py-6 px-8">
							<img
								className="w-11"
								src="/services/list-icon.png"
								alt="List Icon"
							/>
							All API, IVR, chat/voice transcripts.
						</div>
						<div className="flex flex-col items-center justify-center gap-2 py-6 px-8">
							<img
								className="w-11"
								src="/services/list-icon.png"
								alt="List Icon"
							/>
							No token fees, no usage caps.
						</div>
						<div className="flex flex-col items-center justify-center gap-2 py-6 px-8">
							<img
								className="w-11"
								src="/services/list-icon.png"
								alt="List Icon"
							/>
							Predictable budgeting designed to drive ROI.
						</div>
					</div>
					<div className="bg-stone-200 flex-1 rounded-2xl flex flex-col items-center justify-center">
						<div className="py-12 px-8">Others</div>

						<div className="flex flex-col items-center justify-center gap-2 py-10 px-8">
							<img
								className="w-11"
								src="/services/list-icon-2.png"
								alt="List Icon 2"
							/>
						</div>
						<div className="flex flex-col items-center justify-center gap-2 py-10 px-8">
							<img
								className="w-11"
								src="/services/list-icon-2.png"
								alt="List Icon 2"
							/>
						</div>
						<div className="flex flex-col items-center justify-center gap-2 py-10 px-8">
							<img
								className="w-11"
								src="/services/list-icon-2.png"
								alt="List Icon 2"
							/>
						</div>
						<div className="flex flex-col items-center justify-center gap-2 py-10 px-8">
							<img
								className="w-11"
								src="/services/list-icon-2.png"
								alt="List Icon 2"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="flex flex-col gap-4 py-12 mx-4 my-6 rounded-2xl justify-center items-center bg-stone-100">
				<span className="w-fit bg-stone-300 rounded-full px-3 font-semibold">
					SUCCESS STORIES
				</span>
				<h3 className="font-bold text-3xl">Impact You Can Measure</h3>
				<div className="flex mx-32 justify-between rounded-2xl bg-white">
					<div className="flex flex-col justify-between">
						<div className="flex flex-col p-9 gap-3 items-start">
							<img src="/services/company-1.png" alt="Company" />
							<p>
								Single interaction platform streamlines service options, enables
								seamless experience
							</p>
							<span className="flex gap-0.5 items-center font-bold">
								Read Case Study{" "}
								<img src="/services/arrow-icon.png" alt="icon" />
							</span>
						</div>
						<div className="flex items-start gap-4">
							<div className="flex flex-col gap-8">
								<div>
									<div className="m-6 px-6 flex flex-col ">
										<span className="font-bold text-[18px]">53%</span>
										<span className="text-xs text-nowrap">
											increase in digital interactions
										</span>
									</div>
								</div>
								<div>
									<div className="m-6 px-6 flex flex-col ">
										<span className="font-bold text-[18px]">30 min</span>
										<span className="text-xs text-nowrap">
											decrease in phone Average Wait Time
										</span>
									</div>
								</div>
							</div>
							<div className="flex flex-col m-6  ">
								<h4 className="font-bold text-[18px]">Accelerated</h4>
								<p className="text-xs">
									time-to-value via single interaction platform
								</p>
							</div>
						</div>
					</div>
					<div className="p-3">
						<img
							className="rounded-2xl"
							src="/services/section-img.png"
							alt="image"
						/>
					</div>
				</div>
				<div className="flex justify-between gap-48">
					<img
						src="/services/company-1.png"
						alt="Company"
						className="h-10 w-auto object-contain mx-auto"
					/>
					<img
						src="/services/company-2.png"
						alt="Company"
						className="h-10 w-auto object-contain mx-auto"
					/>
					<img
						src="/services/company-3.png"
						alt="Company"
						className="h-10 w-auto object-contain mx-auto"
					/>
					<img
						src="/services/company-4.png"
						alt="Company"
						className="h-10 w-auto object-contain mx-auto"
					/>
				</div>
			</section>

			<section className="flex flex-col gap-4 text-white py-12 mx-4 my-6 rounded-2xl justify-center items-center bg-[url(/services/last-section-bg.png)] bg-cover bg-center bg-no-repeat h-[90vh] ">
				<h3 className="font-bold text-3xl w-md">
					Break Free From Broken Pricing
				</h3>
				<p className="w-md text-xs">
					Per-seat fees and usage spikes stall innovation. Let us show you how a
					platform with predictable, automation-ready pricing moves you forward.
				</p>
				<div className="flex gap-3 ">
					<Button
						customClass={
							"bg-black text-white hover:text-black hover:bg-white border border-fuchsia-600"
						}
					>
						See a Demo
					</Button>
					<Button
						customClass={
							"bg-white text-black hover:bg-neutral-800 hover:text-white hover:shadow hover:shadow-lime-400"
						}
					>
						Contact Us
					</Button>
				</div>
			</section>
		</div>
	);
}

export default Services;
