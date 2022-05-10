import React from "react";
import ImageItem from "../assets/images/xpost_lg_2.jpg.pagespeed.ic.t0aph6N0mC.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";

export default function MostPopular({ mostPopular }) {
  const getDate = (date) => {
    return <div>{new Date(date).toString().slice(4, 15)}</div>;
  };

  return (
    <Swiper
      centeredSlides={true}
      pagination={true}
      modules={[Pagination]}
      spaceBetween={30}
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        700: {
          slidesPerView: 2,
        },
      }}
    >
      {mostPopular?.map((data, key) => {
        return (
          <SwiperSlide key={key}>
            <div className="most_popular">
              <div className="img_box">
                <img src={data.photo_url} alt="lorem" />
              </div>
              <div className="trending_data">
                <div className="category">
                  <div className="name">{data.category.title}</div>-
                  <div className="create_date">
                    {getDate(data.published_date)}
                  </div>
                </div>
                <div className="title">{data.title}</div>
                <div className="short_description">{data.annotation}</div>
                <div className="author">
                  <div className="authoe_img">{data.authors?.slice(0, 1)}</div>
                  <div className="outhor_data">
                    <div className="name">{data.authors}</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
