import { useState } from "react";
import Button from "../components/Button";

function ContactUs() {
	// استیت برای مدیریت اینکه کدام تب فعال است (0، 1 یا 2)
	const [activeTab, setActiveTab] = useState(0);

	// داده‌های لیست سمت چپ
	const contactItems = [
		{
			id: 0,
			title: "New York, US",
			subtitle: "124 8th Ave, New York, NY 10001",
		},
		{
			id: 1,
			title: "Email",
			subtitle: "info@USAFTZ.org",
		},
		{
			id: 2,
			title: "Telephone",
			subtitle: "+1 (212) 470-9158",
		},
	];

	return (
		<div className="bg-white">
			{/* Hero */}
			<section className="flex justify-center items-center bg-orange-50 mx-4 my-4 rounded-2xl">
				{/* import React from 'react'; // --- Main Container --- // رنگ بنفش تیره به
				عنوان پیش‌فرض ست شده است. // برای اضافه کردن عکس، در style ویژگی
				backgroundImage را ست کنید. */}
				<div
					className="relative min-h-screen w-full bg-[url(/public/contact/contact-hero-bg.png)] bg-cover rounded-2xl bg-center bg-no-repeat flex flex-col font-sans"
					// style={{ backgroundImage: "url('/path-to-your-bg.jpg')" }}
				>
					{/* --- Content Wrapper --- */}
					<div className="flex-1 container mx-auto px-6 py-12 md:py-20 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
						{/* --- LEFT COLUMN: Text Content --- */}
						<div className="w-full lg:w-1/2 text-white pt-0 lg:pt-8">
							{/* Pill Badge */}
							<div className="inline-block border border-gray-500/50 rounded-full px-4 py-1 text-[11px] font-bold tracking-[0.15em] uppercase mb-8 bg-white/5 backdrop-blur-sm text-gray-200 shadow-sm">
								Contact USAFTZ
							</div>

							{/* Main Heading */}
							<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.1]">
								Let’s Talk
							</h1>

							{/* Subheading Text */}
							<p className="text-gray-300 text-sm md:text-md mb-10 max-w-xl leading-relaxed">
								Questions about what your organization can do with USAFTZ’s AI
								Customer Interactions Platform? Reach out—we’d love to hear from
								you.
							</p>

							{/* Features Grid */}
							<div className="mb-8">
								<h3 className="font-bold text-lg mb-5 text-white">
									Ask us about our:
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-2 text-sm font-medium text-gray-200">
									{/* Feature Item Component Call */}
									<FeatureItem text="AI For All™" />
									<FeatureItem text="ChannelLess® Architecture" />
									<FeatureItem text="Unified Interactions Platform" />
									<FeatureItem text="Intelligent Voice Solution" />
									<FeatureItem text="Intelligent Digital Solution" />
									<FeatureItem text="USAFTZ Virtual Assistants" />
									<FeatureItem text="CoBrowsing & Messaging" />
									<FeatureItem text="Reporting & Insights Tools" />
								</div>
							</div>
						</div>

						{/* --- RIGHT COLUMN: Form --- */}
						<div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
							<div className="bg-white w-full max-w-[560px] rounded-3xl p-6 md:p-10 shadow-2xl">
								<h2 className="text-3xl font-bold text-gray-900 mb-8">
									We're here to help.
								</h2>

								<form className="space-y-5">
									{/* Row 1: Names */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
										<InputField label="First Name" required />
										<InputField label="Last Name" required />
									</div>

									{/* Row 2: Contact Info */}
									<InputField label="Work Email" required type="email" />
									<InputField label="Phone Number" required type="tel" />

									{/* Row 3: Job Info */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
										<InputField label="Company" required />
										<InputField label="Job Title" required />
									</div>

									{/* Text Area */}
									<div>
										<label className="block text-xs font-bold text-gray-500 mb-2 ml-1">
											What business challenge are you trying to solve?
										</label>
										<textarea className="w-full bg-[#f3f4f6] rounded-xl p-4 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#84cc16] transition-all min-h-[100px] resize-y"></textarea>
									</div>

									{/* Disclaimer Text */}
									<p className="text-[11px] text-gray-400 leading-snug mt-2">
										This site is protected by reCAPTCHA and the Google{" "}
										<a href="#" className="underline hover:text-gray-600">
											Privacy Policy
										</a>{" "}
										and{" "}
										<a href="#" className="underline hover:text-gray-600">
											Terms of Service
										</a>{" "}
										apply.
									</p>

									{/* Submit Button */}
									<Button customClass="bg-lime-500 text-neutral-800 py-4 px-20 border-none hover:bg-neutral-800 hover:text-white hover:shadow hover:shadow-lime-400 font-bold">
										Submit
									</Button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact USAFTZ */}
			<section className="w-full py-16 md:py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6 md:px-12">
					{/* --- Header Section --- */}
					<div className="mb-12 md:mb-20">
						{/* Badge */}
						<span className="inline-block bg-stone-300 text-black text-[11px] font-bold px-3 py-1.5 rounded-full tracking-widest uppercase mb-6">
							USAFTZ Offices
						</span>
						{/* Title */}
						<h2 className="text-3xl md:text-4xl font-bold text-black">
							Contact USAFTZ
						</h2>
					</div>

					{/* --- Main Content Grid --- */}
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
						{/* --- Left Column: Tabs List --- */}
						<div className="lg:col-span-4 flex flex-col gap-10">
							{contactItems.map((item, index) => {
								const isActive = activeTab === index;

								return (
									<div
										key={item.id}
										onClick={() => setActiveTab(index)}
										className={`group flex items-start gap-4 cursor-pointer transition-all duration-300 ${
											isActive ? "opacity-100" : "opacity-50 hover:opacity-80"
										}`}
									>
										{/* Custom Tailwind Icon Area */}
										<div className="mt-1.5 shrink-0">
											{isActive ? (
												// Active Icon: Green Filled Circle
												<div className="w-3 h-3 bg-[#84cc16] rounded-full shadow-[0_0_10px_rgba(132,204,22,0.4)]"></div>
											) : (
												// Inactive Icon: Outlined Diamond (Rotated Square)
												<div className="w-2 h-2 border border-gray-800 transform rotate-45"></div>
											)}
										</div>

										{/* Text Content */}
										<div className="flex flex-col">
											<h3
												className={`text-lg transition-all duration-200 ${
													isActive
														? "font-bold text-black"
														: "font-medium text-gray-700"
												}`}
											>
												{item.title}
											</h3>
											<p className="text-sm text-gray-500 mt-1 leading-relaxed">
												{item.subtitle}
											</p>
										</div>
									</div>
								);
							})}
						</div>

						{/* --- Right Column: Image Placeholder --- */}
						<div className="lg:col-span-8">
							<div className="w-full h-full min-h-[300px] md:min-h-[450px] rounded-4xl overflow-hidden shadow-lg relative">
								<img
									src="/contact/contact-section-img.png"
									alt="Office view"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

// --- Helper Component: Input Field ---
const InputField = ({ label, type = "text", required = false }) => (
	<div className="w-full">
		<label className="block text-xs font-bold text-gray-500 mb-2 ml-1">
			{required && <span className="text-red-500 mr-1 text-sm">*</span>}
			{label}
		</label>
		<input
			type={type}
			className="w-full bg-[#f3f4f6] rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#84cc16] transition-all h-12"
		/>
	</div>
);

// --- Helper Component: Feature Item (With Icon Slot) ---
const FeatureItem = ({ text }) => (
	<div className="flex items-center gap-3">
		{/* کانتینر دایره‌ای سبز رنگ برای آیکون */}
		<div className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center">
			{/* --- ICON SLOT START --- */}
			{/* آیکون خودت رو اینجا بزار. سایز پیشنهادی: w-2.5 h-2.5 */}
			<img src="/services/list-icon.png" alt="icon" className="w-6 h-6" />
			{/* نکته: الان یه نقطه سبز گذاشتم که خالی نباشه، این خط رو پاک کن و svg خودت رو بزار */}
			{/* --- ICON SLOT END --- */}
		</div>
		<span className="leading-none pt-0.5">{text}</span>
	</div>
);

export default ContactUs;
