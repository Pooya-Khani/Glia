import { useState } from "react";
import { ChevronDown } from "lucide-react"; // یا هر آیکون دیگری

const FooterColumn = ({ title, links }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border-b border-white/10 md:border-none">
			{/* Header Button (Mobile toggle / Desktop static) */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex w-full items-center justify-between py-4 md:cursor-default md:py-2"
			>
				<h4 className="font-bold text-white md:text-sm md:uppercase md:tracking-wider md:text-stone-400">
					{title}
				</h4>
				{/* Arrow Icon only visible on mobile */}
				<span
					className={`transition-transform duration-300 md:hidden ${
						isOpen ? "rotate-180" : ""
					}`}
				>
					<ChevronDown className="text-white w-5 h-5" />
				</span>
			</button>

			{/* Links List */}
			<ul
				className={`flex flex-col gap-3 overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-[500px] pb-4 opacity-100" : "max-h-0 opacity-0"} 
          md:max-h-none md:pb-0 md:opacity-100`}
			>
				{links.map((link, index) => (
					<li key={index}>
						<a
							href="#"
							className="text-sm text-stone-400 transition-colors hover:text-white"
						>
							{link}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FooterColumn;
