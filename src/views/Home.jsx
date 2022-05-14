import { Skeleton, Tag } from "antd";
import React, { useEffect, useContext } from "react";
import MostPopular from "../components/mostPopular";
import SmallArticle from "../components/smallArtivle";
import TrendingHorizontal from "../components/trendingHorizontal";
import TrendingVertical from "../components/trendingVertical";
import { MainContext } from "../context/MainContext";
function Home() {
  const {
    getJournals,
    journal,
    getCurrentJournal,
    currentJournal,
    getMostPopular,
    mostPopular,
    category,
    getCategory,
    getArticleByCategory,
    articleByCategory,
  } = useContext(MainContext);
  useEffect(() => {
    getJournals();
    getCurrentJournal();
    getMostPopular();
    getCategory();
    getArticleByCategory(category[0]?.id);
  }, []);

  const getColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  const onCLick = (id) => {
    getArticleByCategory(id);
  };
  return (
    <>
      <div className="container section">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h2 className="heading">Журналы</h2>
          </div>
        </div>
        {journal?.length === 0 ? (
          <Skeleton active avatar paragraph={{ rows: 12 }} />
        ) : (
          <TrendingHorizontal journal={journal} />
        )}
      </div>
      <div className="container section">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <h2 className="heading">Текущие статьи</h2>
          </div>
        </div>
        {currentJournal?.length === 0 ? (
          <div style={{ display: "flex", gap: "50px" }}>
            <Skeleton active avatar paragraph={{ rows: 8 }} />
            <Skeleton active avatar paragraph={{ rows: 8 }} />
            <Skeleton active avatar paragraph={{ rows: 8 }} />
          </div>
        ) : (
          <TrendingVertical currentJournal={currentJournal} />
        )}
      </div>
      <div className="container section">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h2 className="heading">Самые скачиваемые</h2>
          </div>
        </div>
        {mostPopular?.length === 0 ? (
          <div style={{ display: "flex", gap: "50px", padding: "0 100px" }}>
            <Skeleton active avatar paragraph={{ rows: 8 }} />
            <Skeleton active avatar paragraph={{ rows: 8 }} />
            <Skeleton active avatar paragraph={{ rows: 8 }} />
          </div>
        ) : (
          <MostPopular mostPopular={mostPopular} />
        )}
      </div>
      <div className="section container ">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h2 className="heading">По категориям</h2>
          </div>
        </div>
        <div className="category-btn">
          {category?.map((data, key) => {
            return (
              <Tag
                style={{ cursor: "pointer" }}
                key={key}
                color={getColor()}
                onClick={() => onCLick(data.id)}
              >
                {data.title}
              </Tag>
            );
          })}
        </div>
        <div className="category_box">
          {articleByCategory?.length === 0 ? (
            <div
              style={{
                display: "flex",
                gap: "50px",
                width: "100%",
              }}
            >
              <Skeleton active avatar paragraph={{ rows: 5 }} />
              <Skeleton active avatar paragraph={{ rows: 5 }} />
            </div>
          ) : (
            articleByCategory?.map((data, key) => {
              return <SmallArticle data={data} />;
            })
          )}
          {}
        </div>
      </div>
    </>
  );
}

export default Home;
