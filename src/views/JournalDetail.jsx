import React, { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";
import JurnalDetail from "../components/jurnalDetail";
import {tl} from "../configs/i18n";

function JournalDetail() {
  const { oneJournal, getOneJournal } = useContext(MainContext);
  const getId = () => {
    return localStorage.getItem("id");
  };
  const id = getId();

  useEffect(() => {
    if (id) {
      getOneJournal(id);
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
