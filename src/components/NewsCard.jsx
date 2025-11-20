function NewsCard({ img, title, date }) {
	return (
		<div className="flex flex-col gap-4 max-w-sm">
			<div className="relative">
				<img className="rounded-xl" src={img} alt={img} />
				<span className="rounded-bl-xl rounded-tr-xl px-2 py-1 absolute bottom-0 left-0 bg-black text-white">
					News
				</span>
			</div>
			<div className="flex flex-col gap-2 ">
				<span className="border-l border-l-neutral-500 text-neutral-500 px-2 text-xs">
					{date}
				</span>
				<h4 className="text-black text-[18px] font-bold">{title}</h4>
			</div>
		</div>
	);
}

export default NewsCard;
