function Button({
	children,
	customClass = "bg-lime-500 text-neutral-800 py-2 px-4 border-none hover:bg-neutral-800 hover:text-white hover:shadow hover:shadow-lime-400 font-bold",
}) {
	return (
		<button
			className={`flex gap-1.5 outline-none rounded-3xl text-[0.8rem] cursor-pointer  ${customClass}`}
		>
			{children}
		</button>
	);
}

export default Button;
