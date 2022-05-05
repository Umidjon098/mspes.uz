import { SearchOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";
const Navbar = () => {
  const { setVisible, visible } = useContext(MainContext);

  const onClose = () => {
    setVisible(false);
  };
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
      <Drawer title=""  onClose={onClose} visible={visible} >
        <div className="mobile_links">
        <ul>
          <li>Bosh sahifa</li>
          <li>Tahririyat a’zolari</li>
          <li>Mualliflarga</li>
          <li>Arxiv</li>
          <li>Indeksatsiya</li>
        </ul>
        </div>
      
      </Drawer>
    </div>
  );
};

export default Navbar;
