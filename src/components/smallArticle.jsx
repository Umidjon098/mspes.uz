import { Link } from "react-router-dom";

const SmallArticle = ({ data }) => {
  const getDate = (date) => {
    return <div>{new Date(date).toString().slice(4, 15)}</div>;
  };
 console.log(data);
  return (
    <div className="small_article">
      <div className="img_box">
        <img src={data.photo_url} alt="lorem" />
      </div>
      <div className="trending_data">
        <div className="category">
          <div className="name">{data.category.title}</div>-
          <div className="create_date">{getDate(data.published_date)}</div>
        </div>
        <Link
          to={`article_detail/${data.id}`}
          className="title"
        >
          {data.title}
        </Link>
        <div className="author">
          <div className="authoe_img">
            {
              data.author_photo_url ? <img src={ data.author_photo_url} alt="Author"/> : data.authors?.slice(0, 1)
            }
            </div>
          <div className="outhor_data">
            <div className="name">{data.authors}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallArticle;
