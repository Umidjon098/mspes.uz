import ImageItem from "../assets/images/xpost_lg_2.jpg.pagespeed.ic.t0aph6N0mC.webp";

const Trending = () => {
  return (
    <div className="trending_vertical">
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
        <div className="short_description">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
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

export default Trending;
