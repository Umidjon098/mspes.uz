import { DownOutlined } from "@ant-design/icons";
import { Drawer, Dropdown, Menu, Space, Select } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../context/MainContext";
import {} from "@ant-design/icons";
import Logo from "../assets/images/logo.jpg";
import { lang } from "../util";
import { tl } from "../configs/i18n";

const { Option } = Select;
const Navbar = () => {
  const { setVisible, visible } = useContext(MainContext);

  const onClose = () => {
    setVisible(false);
  };
  const handleChange = (value) => {
    window.location.reload();
    return localStorage.setItem("lang", value);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="left_side">
          <div className="logo">
            <img src={Logo} alt="logo" />
            Mspes
          </div>
        </div>
        <div className="right_side">
          <div className="menu_links">
            <ul>
              <li>
                <Link to="/">{tl("main.page")}</Link>
              </li>
              <li>
                <Link to="/members">{tl("members")}</Link>
              </li>
              <li>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item>
                        <Link to="/requirements">{tl("requirements")}</Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link to="/instruction">{tl("instruction")}</Link>
                      </Menu.Item>
                    </Menu>
                  }
                  trigger={["click"]}
                >
                  <Space>
                    {tl("to_authors")}
                    <DownOutlined />
                  </Space>
                </Dropdown>
              </li>
              <li>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item>
                        <Link to="/current_journal">
                          {tl("current.journal")}
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link to="/archive_journal">{tl("archive")}</Link>
                      </Menu.Item>
                    </Menu>
                  }
                  trigger={["click"]}
                >
                  <Space>
                    {tl("archive")}
                    <DownOutlined />
                  </Space>
                </Dropdown>
              </li>
              <li>
                <Link to="/indexing">{tl("index")}</Link>
              </li>
            </ul>
          </div>
          <div className="language">
            {lang === "ru" ? (
              <img src="https://img.icons8.com/color/30/000000/russian-federation.png" />
            ) : (
              <img src="https://img.icons8.com/officel/30/000000/kazakhstan.png" />
            )}
            <Select defaultValue={lang} onChange={handleChange}>
              <Option value="ru">Русский</Option>
              <Option value="kk">Қазақша</Option>
            </Select>
          </div>
          <div className="burger" onClick={() => setVisible(true)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <Drawer title="" onClose={onClose} visible={visible}>
        <Menu defaultSelectedKeys={["1"]} mode="inline" onClick={onClose}>
          <Menu.Item>
            <Link to="/">{tl("main.page")}</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/members">{tl("members")}</Link>
          </Menu.Item>
          <Menu.SubMenu title={tl("members")}>
            <Menu.Item>
              <Link to="/requirements">{tl("requirements")}</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/instruction">{tl("instruction")}</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu title={tl("archive")}>
            <Menu.Item>
              <Link to="/current_journal">{tl("current.journal")}</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/archive_journal">{tl("archive")}</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item>
            <Link to="/indexing">{tl("index")}</Link>
          </Menu.Item>
        </Menu>
        <div className="language mobile">
          {lang === "ru" ? (
            <img src="https://img.icons8.com/color/30/000000/russian-federation.png" />
          ) : (
            <img src="https://img.icons8.com/officel/30/000000/kazakhstan.png" />
          )}
          <Select defaultValue={lang} onChange={handleChange}>
            <Option value="ru">Русский</Option>
            <Option value="kk">Қазақша</Option>
          </Select>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
