import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import { Drawer, Dropdown, Menu, Space } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../context/MainContext";
const Navbar = () => {
  const { setVisible, visible } = useContext(MainContext);

  const onClose = () => {
    setVisible(false);
  };
  const menu = (
    <Menu
      items={[
        {
          label: <Link to="/current_journal">Joriy son</Link>,
          key: "0",
        },
        {
          label: <Link to="/archive_journal">Arxiv</Link>,
          key: "1",
        },
      ]}
    />
  );
  return (
    <div className="navbar">
      <div className="container">
        <div className="left_side">
          <div className="logo">Mspes</div>
          {/* <div className="search">
            <form className="search_form">
              <div className="search_input">
                <div className="search_icon">
                  <SearchOutlined />
                </div>
                <input placeholder="Search..." type="search" />
              </div>
            </form>
          </div> */}
        </div>
        <div className="right_side">
          <div className="menu_links">
            <ul>
              <li>
                <Link to="/">Bosh sahifa</Link>
              </li>
              <li>
                <Link to="/members">Taxririyat a'zolari</Link>
              </li>
              <li>
                <Link to="/author">Mualliflarga</Link>
              </li>
              <li>
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Space>
                    Arxiv
                    <DownOutlined />
                  </Space>
                </Dropdown>
              </li>
              <li>
                <Link to="/indexing">Indeksatsiya</Link>
              </li>
            </ul>
          </div>

          <div className="burger" onClick={() => setVisible(true)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <Drawer title="" onClose={onClose} visible={visible}>
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
