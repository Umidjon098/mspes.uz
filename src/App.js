import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import MainContextProvider from "./context/MainContext";
import ArticleDetail from "./views/ArticleDetail";
import Home from "./views/Home";
import JournalDetail from "./views/JournalDetail";

function App() {
  return (
    <MainContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="journal_detail" element={<JournalDetail />} />
          <Route path="article_detail" element={<ArticleDetail />} />
        </Routes>
      </BrowserRouter>
    </MainContextProvider>
  );
}

export default App;
