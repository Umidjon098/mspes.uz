import React, { useState } from "react";
import { ArticleApi } from "../api/main/article";
import { CategoryApi } from "../api/main/category";
import { JournalApi } from "../api/main/journals";

export const MainContext = React.createContext();

const MainContextProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [journal, setJournal] = useState([]);
  const [oneJournal, setOneJournal] = useState([]);
  const [currentJournal, setCurrentJournal] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);
  const [category, setCategory] = useState([]);
  const [articleByCategory, setArticleByCategory] = useState([]);

  const getJournals = () => {
    JournalApi.get().then((res) => {
      setJournal(res);
    });
  };
  const getOneJournal = (id) => {
    JournalApi.getID(id).then((res) => {
      setOneJournal(res);
    });
  };
  const getCurrentJournal = () => {
    JournalApi.get({ is_new: true }).then((res) => {
      JournalApi.getOne(res[0].id).then((data) => {
        setCurrentJournal(data);
      });
    });
  };
  const getMostPopular = () => {
    ArticleApi.get({ most_popular: true }).then((res) => {
      setMostPopular(res);
    });
  };
  const getCategory = () => {
    CategoryApi.get().then((res) => {
      setCategory(res);
    });
  };
  const getArticleByCategory = (id) => {
    ArticleApi.get({ category_id: id }).then((res) => {
      setArticleByCategory(res);
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
        getMostPopular,
        mostPopular,
        category,
        getCategory,
        getArticleByCategory,
        articleByCategory,
        getOneJournal,
        oneJournal,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
