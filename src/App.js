import { BrowserRouter, Routes, Route } from "react-router-dom";
import CurrentJournal from "./views/currentJournal";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import MainContextProvider from "./context/MainContext";
import ArticleDetail from "./views/ArticleDetail";
import Home from "./views/Home";
import Indexing from "./views/Indexing";
import JournalDetail from "./views/JournalDetail";
import Member from "./views/Member";
import Archive from "./views/Archive";
import Requirements from "./views/Requirements";
import Instructions from "./views/Instructions";

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
          <Route path="current_journal" element={<CurrentJournal />} />
          <Route path="archive_journal" element={<Archive />} />
          <Route path="requirements" element={<Requirements />} />
          <Route path="instruction" element={<Instructions />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MainContextProvider>
  );
}

export default App;
