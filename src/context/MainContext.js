import React, { useState } from "react";
import { JournalApi } from "../api/main/journals";

export const MainContext = React.createContext();

const MainContextProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [journal, setJournal] = useState([]);
  const [currentJournal, setCurrentJournal] = useState([]);

  const getJournals = () => {
    JournalApi.get().then((res) => {
      setJournal(res);
    });
  };
  const getCurrentJournal = () => {
    JournalApi.get({ is_new: true }).then((res) => {
      JournalApi.getOne(res[0].id).then((data) => {
        setCurrentJournal(data);
      });
    });
  };

  return (
    <MainContext.Provider
      value={{
        visible,
        setVisible,
        getJournals,
        journal,
        getCurrentJournal,
        currentJournal,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
