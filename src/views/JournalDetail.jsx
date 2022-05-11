import React, { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";
import New from "../assets/images/new.png";
import {
  EyeOutlined,
  DownloadOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";

function JournalDetail() {
  const { oneJournal, getOneJournal } = useContext(MainContext);
  const getId = () => {
    return localStorage.getItem("id");
  };
  const id = getId();
  const getDate = (date) => {
    return <div>{new Date(date).toString().slice(4, 15)}</div>;
  };
  useEffect(() => {
    if (id) {
      getOneJournal(id);
    }
  }, []);
  const FileDownload = (url) => {
    axios(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `FileName.pdf`);

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      });
  };
  return (
    <div className="container section">
      <div className="row justify-content-center mb-5">
        <div className="col-lg-7 text-center">
          <h2 className="heading">Journal Detail</h2>
        </div>
      </div>
      <div className="trending_horizontal">
        <div className="img_box">
          <img src={oneJournal.photo_url} alt="lorem" />
        </div>
        <div className="trending_data">
          <div className="category">
            <div className="name">Chop etilgan sana</div>-
            <div className="create_date">
              {getDate(oneJournal.published_date)}
            </div>
          </div>
          <Link to="/journal_detail" className="title">
            {oneJournal.title}
          </Link>
          <div className="short_description">{oneJournal.description}</div>
          <div className="category">
            <div className="name">Qabul boshlanish sanasi: </div>
            <div className="create_date">{getDate(oneJournal.from_date)}</div>
          </div>
          <div className="category">
            <div className="name">Qabul tugash sanasi: </div>
            <div className="create_date">{getDate(oneJournal.to_date)}</div>
          </div>
          {/* <div className="category">
                  <div className="name">Ko'rishlar soni: </div>
                  <div className="create_date">{oneJournal.views}</div>
                </div> */}
          <div className="all_count">
            <div className="item">
              <div className="icon">
                <EyeOutlined />
                Ko'rishlar:
              </div>
              <div className="value">{oneJournal.views}</div>
            </div>
            <div className="item">
              <div className="icon">
                <DownloadOutlined />
                Yuklashlar:
              </div>
              <div className="value">{oneJournal.downloads}</div>
            </div>
            <div className="item">
              <div className="icon">
                <FilePdfOutlined />
                Maqolalar:
              </div>
              <div className="value">{oneJournal.count_articles}</div>
            </div>
            <div
              className="item"
              onClick={() => FileDownload(oneJournal.file_url)}
            >
              <div className="icon">
                <DownloadOutlined />
                Yuklab olish
              </div>
            </div>
          </div>
        </div>
        {oneJournal.status === 1 && (
          <div className="new-tag">
            <img src={New} alt="lorem" />
          </div>
        )}
      </div>
    </div>
  );
}

export default JournalDetail;
