import { Skeleton } from "antd";
import React, { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";
import TrendingVertical from "../components/trendingVertical";
import JurnalDetail from "../components/jurnalDetail";
function CurrentJournal() {
  const { currentJournal, currentJournalDetail, getCurrentJournal } =
    useContext(MainContext);

  useEffect(() => {
    getCurrentJournal();
  }, []);
  return (
    <div>
      <div className="container section">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <h2 className="heading">Текущие статьи</h2>
          </div>
        </div>
        <div>
          {currentJournal && (
            <JurnalDetail oneJournal={currentJournalDetail[0]} />
          )}
        </div>
        {currentJournal?.length === 0 ? (
          <div style={{ display: "flex", gap: "50px" }}>
            <Skeleton active avatar paragraph={{ rows: 8 }} />
            <Skeleton active avatar paragraph={{ rows: 8 }} />
            <Skeleton active avatar paragraph={{ rows: 8 }} />
          </div>
        ) : (
          <div className="trending_article">
            {currentJournal?.map((data) => (
              <TrendingVertical data={data} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrentJournal;
