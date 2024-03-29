import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
export default function MostPopular({ mostPopular }) {
  const getDate = (date) => {
    return <div>{new Date(date).toString().slice(4, 15)}</div>;
  };
  const setID = (id) => {
    localStorage.setItem("id", id);
  };
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      spaceBetween={30}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
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
                <Link
                  to={`/article_detail/${data.id}`}
                  className="title"
                  onClick={() => setID(data.id)}
                >
                  {data.title}
                </Link>
                <div className="short_description">{data.annotation}</div>
               <div className="author">
          <div className="authoe_img">
            {
              data.author_photo_url ? <img src={ data.author_photo_url} alt="Author"/> : data.authors?.slice(0, 1)
            }
            </div>
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
