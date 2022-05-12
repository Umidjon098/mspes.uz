import { Avatar, Card, Skeleton } from "antd";
import React, { useContext, useEffect } from "react";
import { MainContext } from "../context/MainContext";
const { Meta } = Card;

function Indexing() {
  const { indexing, getIndexing } = useContext(MainContext);

  useEffect(() => {
    getIndexing();
  }, []);

  return (
    <div className="container section">
      <div className="row justify-content-center mb-5">
        <div className="col-lg-7 text-center">
          <h2 className="heading">Indexing</h2>
        </div>
      </div>
      <div className="indexing">
        {indexing?.map((data, key) => {
          return (
            <div key={key} className="item">
              <div className="img_box">
                <img src={data.photo_url} alt="Image" />
              </div>
              <div className="name">
                <div>{data.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Indexing;
