const TestimonialCard = ({ title, quote, author, role, verifiedText }) => {
	return (
		<div className="flex h-full flex-col justify-between rounded-xl bg-[#1A1623] p-6 text-left shadow-lg md:p-8">
			<div>
				<h3 className="font-bold">{title}</h3>
				<p className="mb-6 text-sm font-medium leading-relaxed text-stone-200 md:text-base">
					"{quote}"
				</p>
			</div>

			<div>
				{/* Stars */}
				<div className="mb-2 flex gap-1">
					{[1, 2, 3, 4, 5].map((star) => (
						<span key={star} className="text-lime-400 text-lg">
							★
						</span>
					))}
				</div>

				<div className="flex items-end justify-between">
					<div className="flex flex-col gap-1">
						<span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
							{role}
						</span>
						<span className="text-sm font-semibold text-white">{author}</span>
						{verifiedText && (
							<span className="text-[10px] text-stone-500">{verifiedText}</span>
						)}
					</div>

					{/* G2 or Company Logo */}
					<div className="h-8 w-8 shrink-0">
						<img
							src="/testimonial.png"
							alt="logo"
							className="h-full w-full object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
