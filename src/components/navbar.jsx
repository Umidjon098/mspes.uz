import { DownOutlined } from "@ant-design/icons";
import { Drawer, Dropdown, Menu, Space } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../context/MainContext";
import {} from "@ant-design/icons";
import Logo from "../assets/images/logo.jpg";
const Navbar = () => {
  const { setVisible, visible } = useContext(MainContext);

  const onClose = () => {
    setVisible(false);
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
                <Link to="/">Главная страница</Link>
              </li>
              <li>
                <Link to="/members">Члены редколлегии</Link>
              </li>
              <li>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item>
                        <Link to="/requirements"> Требования к статье</Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link to="/instruction">
                          Процессуальные нормы и правила
                        </Link>
                      </Menu.Item>
                    </Menu>
                  }
                  trigger={["click"]}
                >
                  <Space>
                    Авторам
                    <DownOutlined />
                  </Space>
                </Dropdown>
              </li>
              <li>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item>
                        <Link to="/current_journal">Текущий номер</Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link to="/archive_journal">Архив</Link>
                      </Menu.Item>
                    </Menu>
                  }
                  trigger={["click"]}
                >
                  <Space>
                    Архив
                    <DownOutlined />
                  </Space>
                </Dropdown>
              </li>
              <li>
                <Link to="/indexing">Индексация</Link>
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
        <Menu defaultSelectedKeys={["1"]} mode="inline" onClick={onClose}>
          <Menu.Item>
            <Link to="/">Главная страница</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/members">Члены редколлегии</Link>
          </Menu.Item>
          <Menu.SubMenu title="Авторам">
            <Menu.Item>
              <Link to="/requirements"> Требования к статье</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/instruction">Процессуальные нормы и правила</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu title="Архив">
            <Menu.Item>
              <Link to="/current_journal">Текущий номер</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/archive_journal">Архив</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item>
            <Link to="/indexing">Индексация</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default Navbar;
