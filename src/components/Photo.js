import React from "react"


const Photo = (props) => {
  const { photoSrc } = props;
  return (
      <img className="nasa-photo" src={photoSrc} style={{
          maxWidth: '650px',
      }}/>
  )
};

export default Photo;
