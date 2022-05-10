import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import MainContextProvider from "./context/MainContext";
import Home from "./views/Home";
import JournalDetail from "./views/JournalDetail";

function App() {
  return (
    <MainContextProvider>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="journal_detail" element={<JournalDetail />} />
        </Routes>
      </BrowserRouter>
    </MainContextProvider>
  );
}

export default App;
