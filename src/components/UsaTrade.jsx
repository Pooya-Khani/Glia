const UsaTrade = ({ image, title, description }) => {
	return (
		<div className="w-full max-w-[360px] group cursor-pointer">
			{/* Image Container */}
			<div className="relative h-60 w-full overflow-hidden rounded-2xl">
				<img
					src={image}
					alt={title}
					className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
				/>

				{/* Category Badge */}
				<div className="absolute bottom-0 left-0">
					<span className="inline-block  rounded-bl-2xl rounded-tr-2xl bg-[#242033] px-3 py-1.5 text-[11px] font-semibold text-white opacity-95 backdrop-blur-sm">
						Credit Union
					</span>
				</div>
			</div>

			{/* Content Container */}
			<div className="mt-3 pr-2">
				<h3 className="text-[17px] font-extrabold leading-tight text-slate-900 group-hover:text-blue-700 transition-colors">
					{title}
				</h3>
				<p className="mt-2 text-[13px] font-medium leading-relaxed text-slate-500">
					{description}
				</p>
			</div>
		</div>
	);
};

export default UsaTrade;
