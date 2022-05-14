import React, { useEffect, useState } from "react";
import {
  FacebookOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { SettingsApi } from "../api/main/settings";
import { Divider } from "antd";

function Footer() {
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    SettingsApi.get()
      .then((res) => {
        setSettings(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Divider />
      <div className="footer container">
        <div className="social">
          <div className="icon">
            <a href={settings.facebook} target="_blank">
              <FacebookOutlined />
            </a>
          </div>
          <div className="icon">
            <a href={settings.youtube} target="_blank">
              <YoutubeOutlined />
            </a>
          </div>
          <div className="icon">
            <a href={settings.instagram} target="_blank">
              <InstagramOutlined />
            </a>
          </div>
          <div className="icon">
            <a href={settings.instagram} target="_blank">
              <InstagramOutlined />
            </a>
          </div>
        </div>
        <div className="widget">
          <p>{settings.aphorism}</p>
          <p>{settings.phone}</p>
          <p>{settings.email}</p>
          <div>{settings.address}</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
