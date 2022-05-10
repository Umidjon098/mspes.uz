import { Empty, Tag } from "antd";
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
            <h2 className="heading">Jurnallar</h2>
          </div>
        </div>
        <TrendingHorizontal journal={journal} />
      </div>
      <TrendingVertical currentJournal={currentJournal} />
      <div className="section">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h2 className="heading">Eng ko'p yuklab olingan</h2>
          </div>
        </div>
        <MostPopular mostPopular={mostPopular} />
      </div>
      <div className="section container ">
        <div className="category-btn">
          {category?.map((data, key) => {
            return (
              <Tag
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
          {articleByCategory?.map((data, key) => {
            return <SmallArticle data={data} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
