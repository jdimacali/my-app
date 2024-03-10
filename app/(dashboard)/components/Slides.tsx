import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

import Image from "next/image";
import Link from "next/link";
import { Slide } from "@/types";

interface SlidesProps {
  slides: Slide[];
}

const Slides = ({ slides }: SlidesProps) => {
  return (
    <div className="h-full w-full flex justify-center items-center mt-10 max-sm:pl-13 max-md:pl-30">
      <Swiper
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
        }}
        navigation={true}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        effect="coverflow"
        className="w-[1500px] max-sm:w-full h-full flex justify-center items-center"
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          900: { slidesPerView: 4 },
        }}
      >
        {slides &&
          slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="h-full w-full flex justify-center items-center place-self-center"
            >
              <Link href={slide.url ? slide.url : "/"}>
                <Image
                  src={slide.image.data.attributes.formats.small.url}
                  alt={slide.image.data.attributes.formats.small.url}
                  height={350}
                  width={350}
                  loading="lazy"
                  className="block object-contain shadow hover:scale-110 transition-all aspect-square"
                  onContextMenu={(e) => {
                    e.preventDefault();
                  }}
                />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Slides;
