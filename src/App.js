import Navbar from "./components/navbar";
import TrendingHorizontal from "./components/trendingHorizontal";
import TrendingVertical from "./components/trendingVertical";
import MainContextProvider from "./context/MainContext";


function App() {
  return (
    <MainContextProvider>
      <Navbar />
      <div className="container section">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h2 className="heading">Trending</h2>
          </div>
        </div>
        <TrendingHorizontal />
      </div>
      <div className="container section trending_article">
        <TrendingVertical />
        <TrendingVertical />
        <TrendingVertical />

      </div>
    </MainContextProvider>

  );
}

export default App;
