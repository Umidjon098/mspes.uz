import React, { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";

function ArticleDetail() {
  const { getArticleDetail, articleDetail } = useContext(MainContext);

  const getId = () => {
    return localStorage.getItem("id");
  };
  const id = getId();

  const getDate = (date) => {
    return <div>{new Date(date).toString().slice(4, 15)}</div>;
  };
  useEffect(() => {
    if (id) {
      getArticleDetail(id);
    }
  }, []);
  return (
    <div className="container section">
      <div className="row justify-content-center mb-5">
        <div className="col-lg-7 text-center">
          <h2 className="heading">Article Detail</h2>
        </div>
      </div>
      <div className=" trending_article detail">
        <div className="trending_vertical">
          <div className="img_box">
            <img src={articleDetail?.photo_url} alt="lorem" />
          </div>
          <div className="trending_data">
            <div className="category">
              <div className="name">{articleDetail?.category?.title}</div>-
              <div className="create_date">
                {getDate(articleDetail.published_date)}
              </div>
            </div>
            <div className="title">{articleDetail?.title}</div>
            <div className="short_description">{articleDetail?.annotation}</div>
            <div className="author">
              <div className="authoe_img">
                {articleDetail?.authors?.slice(0, 1)}
              </div>
              <div className="outhor_data">
                <div className="name">{articleDetail?.authors}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;