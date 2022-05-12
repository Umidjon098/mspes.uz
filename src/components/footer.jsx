import React from "react";
import {
  FacebookOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

function Footer() {
  return (
    <div className="footer container">
      <div className="social">
        <div className="icon">
          <FacebookOutlined />
        </div>
        <div className="icon">
          <YoutubeOutlined />
        </div>
        <div className="icon">
          <InstagramOutlined />
        </div>
        <div className="icon">
          <TwitterOutlined />
        </div>
      </div>
      <div className="widget">
        <p>
          Copyright ©2022 All rights reserved | This template is made with by
          Colorlib
        </p>
        <div>Terms & Conditions/ Privacy Policy</div>
      </div>
    </div>
  );
}

export default Footer;
