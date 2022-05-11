import { Empty } from "antd";
import { Link } from "react-router-dom";
const Trending = ({ currentJournal }) => {
  const getDate = (date) => {
    return <div>{new Date(date).toString().slice(4, 15)}</div>;
  };
  const setID = (id) => {
    localStorage.setItem("id", id);
  };
  return (
    <div className=" trending_article">
      {currentJournal.length === 0 ? (
        <Empty
          style={{
            width: "100%",
          }}
        />
      ) : (
        <>
          {currentJournal.map((data, key) => {
            return (
              <div key={key} className="trending_vertical">
                <div className="img_box">
                  <img src={data.photo_url} alt="lorem" />
                </div>
                <div className="trending_data">
                  <div className="category">
                    <div className="name">{data.category.title}</div>-
                    <div className="create_date">
                      {getDate(data.published_date)}
                    </div>
                  </div>
                  <Link
                    to="/article_detail"
                    className="title"
                    onClick={() => setID(data.id)}
                  >
                    {data.title}
                  </Link>
                  <div className="short_description">{data.annotation}</div>
                  <div className="author">
                    <div className="authoe_img">
                      {data.authors?.slice(0, 1)}
                    </div>
                    <div className="outhor_data">
                      <div className="name">{data.authors}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Trending;
