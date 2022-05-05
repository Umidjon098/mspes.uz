import ImageItem from "../assets/images/xpost_lg_2.jpg.pagespeed.ic.t0aph6N0mC.webp";

const SmallArticle = () => {
  return (
    <div className="small_article">
      <div className="img_box">
        <img src={ImageItem} alt="lorem" />
      </div>
      <div className="trending_data">
        <div className="category">
          <div className="name">Business, Travel </div>-
          <div className="create_date">July 2, 2020</div>
        </div>
        <div className="title">
          Your most unhappy customers are your greatest source of learning.
        </div>
        <div className="author">
          <div className="authoe_img">J</div>
          <div className="outhor_data">
            <div className="name">John Doe</div>
            <div className="position">CEO and Founder</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallArticle;
