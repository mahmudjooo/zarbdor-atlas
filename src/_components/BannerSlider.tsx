"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

export default function BannerSlider() {
  const banners = [
    {
      id: 1,
      image:
        "https://www.ganni.com/dw/image/v2/AAWT_PRD/on/demandware.static/-/Sites-ganni-master-catalogue/default/dwd6d3ac34/images/images/model/T4155_3718_326_1.jpg?sh=1200",
    },
    {
      id: 2,
      image:
        "https://www.ganni.com/dw/image/v2/AAWT_PRD/on/demandware.static/-/Sites-ganni-master-catalogue/default/dwd6d3ac34/images/images/model/T4155_3718_326_1.jpg?sh=1200",
    },
    {
      id: 3,
      image:
        "https://www.ganni.com/dw/image/v2/AAWT_PRD/on/demandware.static/-/Sites-ganni-master-catalogue/default/dwd6d3ac34/images/images/model/T4155_3718_326_1.jpg?sh=1200",
    },
    {
      id: 4,
      image:
        "https://www.ganni.com/dw/image/v2/AAWT_PRD/on/demandware.static/-/Sites-ganni-master-catalogue/default/dwd6d3ac34/images/images/model/T4155_3718_326_1.jpg?sh=1200",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 ">
      <div className="container mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 }, // 📱 Mobile
            640: { slidesPerView: 2 }, // 📱 Tablet
            1024: { slidesPerView: 3 }, // 💻 Desktop
          }}
          className="pb-10"
        >
          {banners.map((item, i) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={item.image}
                  alt={`Banner ${item.id}`}
                  className="w-full h-64 md:h-80 object-cover hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
