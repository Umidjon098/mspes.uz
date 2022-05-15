import { Empty } from "antd";
import React, { useContext, useEffect } from "react";
import JurnalDetail from "../components/jurnalDetail";
import { MainContext } from "../context/MainContext";

function Archive() {
  const { journal, getJournals } = useContext(MainContext);

  useEffect(() => {
    getJournals();
  }, []);

  const FilteredResult = journal?.filter((data) => data.status !== 1);
  return (
    <div className="container section">
      <div className="row justify-content-center mb-5">
        <div className="col-lg-7 text-center">
          <h2 className="heading">Archive Journal</h2>
        </div>
      </div>
      {FilteredResult.length === 0 ? (
        <Empty />
      ) : (
        FilteredResult.map((data, key) => {
          return (
            <div key={key} className="mb-5">
              <JurnalDetail oneJournal={data} />
            </div>
          );
        })
      )}
    </div>
  );
}

export default Archive;
