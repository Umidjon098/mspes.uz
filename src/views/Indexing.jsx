import { Card, Skeleton } from "antd";
import React, { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";
import {tl} from "../configs/i18n";

function Indexing() {
  const { indexing, getIndexing } = useContext(MainContext);

  useEffect(() => {
    getIndexing();
  }, []);

  return (
    <div className="container section">
      <div className="row justify-content-center mb-5">
        <div className="col-lg-7 text-center">
          <h2 className="heading">{tl("index")}</h2>
        </div>
      </div>
      <div className="indexing">
        {indexing.length === 0 ? (
          <div style={{ display: "flex", gap: 30 }}>
            <Card style={{ width: 300 }}>
              <Skeleton loading={true} avatar active></Skeleton>
            </Card>
            <Card style={{ width: 300 }}>
              <Skeleton loading={true} avatar active></Skeleton>
            </Card>
            <Card style={{ width: 300 }}>
              <Skeleton loading={true} avatar active></Skeleton>
            </Card>
            <Card style={{ width: 300 }}>
              <Skeleton loading={true} avatar active></Skeleton>
            </Card>
          </div>
        ) : (
          indexing?.map((data, key) => {
            return (
              <div key={key} className="item">
                <a href={data.url} target="_blank">
                  <div className="img_box">
                    <img src={data.photo_url} alt="Image" />
                  </div>
                </a>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Indexing;
