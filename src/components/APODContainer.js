import React from "react"
import Photo from './Photo'
import PhotoName from './PhotoName'
import Description from './Description'


const APODContainer = (props) => {
  const { data } = props;
  console.log(data)
  return (
    <div>
      <h1>NASA Photo of the Day</h1>
      <Photo photoSrc={data.hdurl}/>
      <PhotoName photoTitle={data.title} photoDate={data.date}/>
      <Description description={data.explanation}/>
    </div>
  );
};

export default APODContainer;
