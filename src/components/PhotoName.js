import React from "react";

const PhotoName = (props) => {
  const { photoTitle, photoDate } = props;
  return (
    <div>
      <h3 style={{ paddingTop: "20px" }}>Title: {photoTitle}</h3>
      <h5>
          Date Taken: {photoDate}
      </h5>
    </div>
  );
};

export default PhotoName;
