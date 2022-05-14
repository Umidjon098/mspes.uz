import React from "react";
import New from "../assets/images/new.png";
import {
  EyeOutlined,
  DownloadOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import axios from "axios";

function JurnalDetail({ oneJournal = {} }) {
  const getDate = (date) => {
    return <div>{new Date(date).toString().slice(4, 15)}</div>;
  };
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
    <div>
      <div className="trending_horizontal detail">
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
          <div className="title">{oneJournal.title}</div>
          <div className="short_description">{oneJournal.description}</div>
          <div className="category">
            <div className="name">Qabul boshlanish sanasi: </div>
            <div className="create_date">{getDate(oneJournal.from_date)}</div>
          </div>
          <div className="category">
            <div className="name">Qabul tugash sanasi: </div>
            <div className="create_date">{getDate(oneJournal.to_date)}</div>
          </div>
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
          </div>
          <div
            className="download"
            onClick={() => FileDownload(oneJournal.file_url)}
          >
            <div className="icon">
              <DownloadOutlined />
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

export default JurnalDetail;
