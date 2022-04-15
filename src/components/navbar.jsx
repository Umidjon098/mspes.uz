import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";
const Navbar = () => {
  const { setVisible, visible } = useContext(MainContext);
  return (
    <div className="navbar">
      <div className="container">
        <div className="left_side">
          <div className="search">
            <form className="search_form">
              <div className="search_input">
                <div className="search_icon">
                  <SearchOutlined />
                </div>
                <input placeholder="Search..." type="search" />
              </div>
            </form>
          </div>
        </div>
        <div className="right_side">
          <div className="logo">Mspes</div>
          <div className="menu_links">
            <ul>
              <li>Bosh sahifa</li>
              <li>Tahririyat a’zolari</li>
              <li>Mualliflarga</li>
              <li>Arxiv</li>
              <li>Indeksatsiya</li>
            </ul>
          </div>

          <div className="burger" onClick={() => setVisible(true)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {/* <div
        className={visible ? "dark_overlay active" : "dark_overlay"}
        onClick={() => setVisible(false)}
      ></div>
      <div
        className={visible ? "mobile_menu_links active" : "mobile_menu_links"}
      >
        <div className="close_btn" onClick={() => setVisible(false)}>
          <CloseOutlined />
        </div>
        <ul>
          <li>Bosh sahifa</li>
          <li>Tahririyat a’zolari</li>
          <li>Mualliflarga</li>
          <li>Arxiv</li>
          <li>Indeksatsiya</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
