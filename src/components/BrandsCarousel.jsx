import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

function BrandsCarousel() {
	const brands = [
		"/services/brand-1.png",
		"/services/brand-2.png",
		"/services/brand-3.png",
		"/services/brand-4.png",
		"/services/brand-5.png",
		"/services/brand-6.png",
		"/services/brand-7.png",
		"/services/brand-8.png",
		"/services/brand-9.png",
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
				{brands.map((b, i) => (
					<SwiperSlide key={i}>
						<img
							src={b}
							alt={b}
							className="h-14 w-auto object-contain mx-auto"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default BrandsCarousel;
