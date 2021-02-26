import React from "react";
import Picture from "../picture/picture";
import "./pictureList.scss";

const PictureList = ({ pictureList, onClickImage }) => {
  return (
    <div className="picture-list">
      {pictureList.map((pictureData) => {
        return (
          <div className="picture-list__frame">
            <Picture
              pictureUrl={pictureData.download_url}
              key={pictureData.id}
              onClickImage={onClickImage}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PictureList;
