import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

function BanksCarousel() {
	const banks = [
		"/home/bank-1.png",
		"/home/bank-2.png",
		"/home/bank-3.png",
		"/home/bank-4.png",
		"/home/bank-5.png",
		"/home/bank-6.png",
		"/home/bank-7.png",
		"/home/bank-8.png",
		"/home/bank-9.png",
	];

	return (
		<div className="relative w-full">
			{/* Fade Left */}
			<div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-linear-to-r from-white via-white/80 to-white/0 z-10" />

			{/* Fade Right */}
			<div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-linear-to-l from-white via-white/80 to-white/0 z-10" />

			<Swiper
				modules={[Autoplay]}
				slidesPerView={7}
				loop={true}
				spaceBetween={30}
				speed={2000}
				autoplay={{ delay: 0, disableOnInteraction: false }}
				className="py-6"
			>
				{banks.map((b, i) => (
					<SwiperSlide key={i}>
						<img src={b} alt={b} className="h-14 object-contain mx-auto" />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default BanksCarousel;
