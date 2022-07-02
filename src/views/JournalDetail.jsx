import React, { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";
import JurnalDetail from "../components/jurnalDetail";
import {tl} from "../configs/i18n";
import {useParams} from "react-router-dom"
function JournalDetail() {
  const { oneJournal, getOneJournal } = useContext(MainContext);
  const params = useParams()


  useEffect(() => {
    if (params.id) {
      getOneJournal(params.id);
    }
  }, []);

  return (
    <div className="container section">
      <div className="row justify-content-center mb-5">
        <div className="col-lg-7 text-center">
          <h2 className="heading">{tl("journal.detail")}</h2>
        </div>
      </div>
      <JurnalDetail oneJournal={oneJournal} />
    </div>
  );
}

export default JournalDetail;
