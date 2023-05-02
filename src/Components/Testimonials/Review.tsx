import Star from "@iconscout/react-unicons/icons/uil-star";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Review() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className=" flex flex-col gap-4 rounded-3xl bg-white p-6">
          <div className=" flex gap-2">
            <Star color="orange" />
            <Star color="orange" />
            <Star color="orange" />
            <Star color="orange" />
            <Star color="orange" />
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            deserunt expedita. Ducimus, ipsum sapiente. Molestias a obcaecati
            numquam odit vel?
          </div>
          <div className="flex flex-col items-end">
            <span>Brock Lesner</span>
            <span>Athleth WWE</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex flex-col gap-4 rounded-3xl bg-white p-6">
          <div className=" flex gap-2">
            <Star color="orange" />
            <Star color="orange" />
            <Star color="orange" />
            <Star color="orange" />
            <Star color="orange" />
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            deserunt expedita. Ducimus, ipsum sapiente. Molestias a obcaecati
            numquam odit vel?
          </div>
          <div className="flex flex-col items-end">
            <span>Brock Lesner</span>
            <span>Athleth WWE</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex flex-col rounded-3xl bg-white p-6">
          <div className=" flex gap-2">
            <Star color="orange" />
            <Star color="orange" />
            <Star color="orange" />
            <Star color="orange" />
            <Star color="orange" />
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            deserunt expedita. Ducimus, ipsum sapiente. Molestias a obcaecati
            numquam odit vel?
          </div>
          <div className="flex flex-col items-end">
            <span>Brock Lesner</span>
            <span>Athleth WWE</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
