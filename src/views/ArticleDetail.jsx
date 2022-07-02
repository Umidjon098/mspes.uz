import React, { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";
import { DownloadOutlined } from "@ant-design/icons";
import { ArticleApi } from "../api/main/article";
import { tl } from "../configs/i18n";
import {useParams} from "react-router-dom"
function ArticleDetail() {
  const { getArticleDetail, articleDetail } = useContext(MainContext);
const params = useParams()
  const getDate = (date) => {
    return <div>{new Date(date).toString().slice(4, 15)}</div>;
  };
  useEffect(() => {
    if (params.id) {
      getArticleDetail(params.id);
    }
  }, []);
  const FileDownload = (id) => {
    ArticleApi.download(id);
  };
  console.log(articleDetail);
  return (
    <div className="container section">
      <div className="row justify-content-center mb-5">
        <div className="col-lg-7 text-center">
          <h2 className="heading">{tl("article.detail")}</h2>
        </div>
      </div>
      <div className=" trending_article detail">
        <div className="trending_vertical">
          <div className="img_box">
            <img src={articleDetail?.photo_url} alt="lorem" />
          </div>
          <div className="trending_data">
            <div style={{justifyContent: "space-between"}} className="category">
              <div style={{display: "flex"}}>
              <div className="name">{articleDetail?.category?.title}</div>-
              <div className="create_date">
                {getDate(articleDetail.published_date)}
              </div>
              </div>
              <div className="name">{`${ articleDetail.page_from + "-" +articleDetail.page_to} pages`}</div>
            </div>
            <div className="title">{articleDetail?.title}</div>
            <div className="short_description">{articleDetail?.annotation}</div>
            <div className="author">
          <div className="authoe_img">
            {
              articleDetail.author_photo_url ? <img src={ articleDetail.author_photo_url} alt="Author"/> : articleDetail.authors?.slice(0, 1)
            }
            </div>
          <div className="outhor_data">
            <div className="name">{articleDetail.author?.map(author => {
              return author.full_name
            })}</div>
          </div>
        </div>
            <a
              onClick={() => FileDownload(articleDetail.id)}
              className="article_download"
              href={articleDetail.file_url}
              target="_blank"
            >
              <div className="icon">
                <DownloadOutlined />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;
