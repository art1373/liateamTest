import React from "react";
import LogoWhite from "../../assets/icons/lia-white.png";
import {
  PhoneFilled,
  MailOutlined,
  YoutubeFilled,
  InstagramFilled,
  TwitterSquareFilled,
  FacebookFilled,
  CustomerServiceOutlined,
} from "@ant-design/icons";

import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer-container">
      <ul className="right-section">
        <li>
          مرکز پشتیبانی بازاریابان
          <CustomerServiceOutlined style={{ fontSize: 25, padding: 5 }} />
        </li>
        <li>
          021 88 88 88 88
          <PhoneFilled style={{ fontSize: 25, padding: 5 }} />
        </li>
        <li>
          sellersupport@liateam.com
          <MailOutlined style={{ fontSize: 25, padding: 5 }} />
        </li>
      </ul>
      <div className="left-section">
        <span>Good Times Good News</span>
        <div>
          <span>Lia Virtual Office</span>
          <img src={LogoWhite} alt="lia-time" />
        </div>
      </div>

      <div className="bottom-footer">
        <div>هفت روز هفته پاسخگوی شما هستیم</div>
        <div>
          <FacebookFilled style={{ fontSize: 30, padding: 5 }} />
          <YoutubeFilled style={{ fontSize: 30, padding: 5 }} />
          <InstagramFilled style={{ fontSize: 30, padding: 5 }} />
          <TwitterSquareFilled style={{ fontSize: 30, padding: 5 }} />
        </div>

        <div>تمامی حقوق این وب سایت متعلق به وب سایت آرمان است</div>
      </div>
    </footer>
  );
};

export default Footer;
