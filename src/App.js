import axios from "axios";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import APODContainer from "./components/APODContainer";

const theme = {
  backgroundColor: "#ba1e68",
};

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div style={{backgroundColor: "#ba1e68", minHeight: '100vh'}}className="App">{data && <APODContainer data={data} />}</div>;
    </ThemeProvider>
  );
}

export default App;
