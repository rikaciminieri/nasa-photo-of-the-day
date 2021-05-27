import React from "react"
import Photo from './Photo'
import PhotoName from './PhotoName'
import Description from './Description'
import styled from 'styled-components'

const H1 = styled.h1`
  padding: 50px;
`
const APODContainer = (props) => {
  const { data } = props;
  console.log(data)
  return (
    <div>
      <H1>NASA Photo of the Day</H1>
      <Photo photoSrc={data.hdurl}/>
      <PhotoName photoTitle={data.title} photoDate={data.date}/>
      <Description description={data.explanation}/>
    </div>
  );
};

export default APODContainer;
