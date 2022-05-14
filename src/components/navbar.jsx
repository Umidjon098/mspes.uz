import {
  DownOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Drawer, Dropdown, Menu, Space } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../context/MainContext";
import {} from "@ant-design/icons";
const Navbar = () => {
  const { setVisible, visible } = useContext(MainContext);

  const onClose = () => {
    setVisible(false);
  };
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("User", "sub1", <UserOutlined />, [
      getItem("Tom", "3"),
      getItem("Bill", "4"),
      getItem("Alex", "5"),
    ]),
    getItem("Team", "sub2", <TeamOutlined />, [
      getItem("Team 1", "6"),
      getItem("Team 2", "8"),
    ]),
    getItem("Files", "9", <FileOutlined />),
  ];
  return (
    <div className="navbar">
      <div className="container">
        <div className="left_side">
          <div className="logo">Mspes</div>
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
                <Dropdown
                  overlay={
                    <Menu
                      items={[
                        {
                          label: (
                            <Link to="/requirements"> Maqola talablari</Link>
                          ),
                          key: "0",
                        },
                        {
                          label: (
                            <Link to="/instruction">
                              Tartib qoida va yoriqnomalar
                            </Link>
                          ),
                          key: "1",
                        },
                      ]}
                    />
                  }
                  trigger={["click"]}
                >
                  <Space>
                    Mualliflarga
                    <DownOutlined />
                  </Space>
                </Dropdown>
              </li>
              <li>
                <Dropdown
                  overlay={
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
                  }
                  trigger={["click"]}
                >
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
        <Menu defaultSelectedKeys={["1"]} mode="inline" items={items} />
      </Drawer>
    </div>
  );
};

export default Navbar;
