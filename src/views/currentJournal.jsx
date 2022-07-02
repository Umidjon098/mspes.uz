import React, { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";
import JurnalDetail from "../components/jurnalDetail";
import {tl} from "../configs/i18n";
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
            <h2 className="heading">{tl("current.article")}</h2>
          </div>
        </div>
        <div>
          {currentJournal && (
            <JurnalDetail oneJournal={currentJournalDetail[0]} />
          )}
        </div>
      </div>
    </div>
  );
}

export default CurrentJournal;
