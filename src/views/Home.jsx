import { Empty } from "antd";
import React, { useEffect, useContext } from "react";
import MostPopular from "../components/mostPopular";
import SmallArticle from "../components/smallArtivle";
import TrendingHorizontal from "../components/trendingHorizontal";
import TrendingVertical from "../components/trendingVertical";
import { MainContext } from "../context/MainContext";
function Home() {
  const { getJournals, journal, getCurrentJournal, currentJournal } =
    useContext(MainContext);
  useEffect(() => {
    getJournals();
    getCurrentJournal();
  }, []);
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
        <MostPopular />
      </div>
      <div className="section container category_box">
        <SmallArticle />
        <SmallArticle />
        <SmallArticle />
        <SmallArticle />
      </div>
    </>
  );
}

export default Home;
