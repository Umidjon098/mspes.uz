import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import MainContextProvider from "./context/MainContext";
import ArticleDetail from "./views/ArticleDetail";
import Home from "./views/Home";
import Indexing from "./views/Indexing";
import JournalDetail from "./views/JournalDetail";
import Member from "./views/Member";

function App() {
  return (
    <MainContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="journal_detail" element={<JournalDetail />} />
          <Route path="article_detail" element={<ArticleDetail />} />
          <Route path="members" element={<Member />} />
          <Route path="indexing" element={<Indexing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MainContextProvider>
  );
}

export default App;
