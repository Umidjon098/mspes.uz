import React from "react";
import New from "../assets/images/new.png";
import {
  EyeOutlined,
  DownloadOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import { JournalApi } from "../api/main/journals";
import { Skeleton } from "antd";
import {tl} from "../configs/i18n";

function JurnalDetail({ oneJournal = {} }) {
  const getDate = (date) => {
    return <div>{new Date(date).toString().slice(4, 15)}</div>;
  };
  const FileDownload = (id) => {
    JournalApi.download(id);
  };
  return (
    <div>
      {Object.keys(oneJournal).length === 0 ? (
        <Skeleton active avatar paragraph={{ rows: 12 }} />
      ) : (
        <div className="trending_horizontal detail">
          <div className="img_box">
            <img src={oneJournal.photo_url} alt="lorem" />
          </div>
          <div className="trending_data">
            <div className="category">
              <div className="name">{tl("published.date")}</div>-
              <div className="create_date">
                {getDate(oneJournal.published_date)}
              </div>
            </div>
            <div className="title">{oneJournal.title}</div>
            <div className="short_description">{oneJournal.description}</div>
            <div className="category">
              <div className="name">{tl("start.date")}: </div>
              <div className="create_date">{getDate(oneJournal.from_date)}</div>
            </div>
            <div className="category">
              <div className="name">{tl("end.date")}: </div>
              <div className="create_date">{getDate(oneJournal.to_date)}</div>
            </div>
            <div className="all_count">
              <div className="item">
                <div className="icon">
                  <EyeOutlined />
                  {tl("views")}:
                </div>
                <div className="value">{oneJournal.views}</div>
              </div>
              <div className="item">
                <div className="icon">
                  <DownloadOutlined />
                  {tl("download")}:
                </div>
                <div className="value">{oneJournal.downloads}</div>
              </div>
              <div className="item">
                <div className="icon">
                  <FilePdfOutlined />
                  Cтатьи:
                </div>
                <div className="value">{oneJournal.count_articles}</div>
              </div>
            </div>
            <a
              onClick={() => FileDownload(oneJournal.id)}
              className="download"
              href={oneJournal.file_url}
              target="_blank"
            >
              <div className="icon">
                <DownloadOutlined />
              </div>
            </a>
          </div>
          {oneJournal.status === 1 && (
            <div className="new-tag">
              <img src={New} alt="lorem" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default JurnalDetail;
