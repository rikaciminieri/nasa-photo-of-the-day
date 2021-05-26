import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import APODContainer from "./components/APODContainer";

function App() {
  const [data, setData] = useState({
    date: "2021-05-26",
    explanation:
      "What created these unusual clouds?  At the center of this 2021 Hubble image sits AG Carinae, a supergiant star located about 20,000 light-years away in the southern constellation Carina.  The star's emitted power is over a million times that of the Sun, making AG Carinae one of the most luminous stars in our Milky Way galaxy.  AG Carinae and its neighbor Eta Carinae belong to the scarce Luminous Blue Variable (LBV) class of stars, known for their rare but violent eruptions.  The nebula that surrounds AG Car is interpreted as a remnant of one or more such outbursts.  This nebula measures 5 light-years across, is estimated to contain about 10 solar masses of gas, and to be at least 10,000 years old.  This Hubble image, taken to commemorate Hubble's 31st launch anniversary, is the first to capture the whole nebula, offering a new perspective on its structure and dust content.  The LBVs represent a late and short stage in the lives of some supergiant stars, but explaining their restlessness remains a challenge to humanity's understanding of how massive stars work.    Your questions answered: Tonight's Blood Supermoon Total Lunar Eclipse",
    hdurl: "https://apod.nasa.gov/apod/image/2105/AgCar_HubbleSchmidt_2212.jpg",
    media_type: "image",
    service_version: "v1",
    title: "The Outburst Clouds of Star AG Car",
    url: "https://apod.nasa.gov/apod/image/2105/AgCar_HubbleSchmidt_960.jpg",
  });

  // useEffect(() => {
  //   axios
  //     .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  //     .then((response) => {
  //       console.log(response.data);
  //       setData(response.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return <div className="App">{data && <APODContainer data={data} />}</div>;
}

export default App;
