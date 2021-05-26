import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import APODContainer from './components/APODContainer'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then((response) => {
      console.log(response.data);
      setData(response.data);
    })
    .catch((err)=> console.log(err))
  }, [])

  return (
    <div className="App">
      <APODContainer data={data} />
    </div>
  );
}

export default App;
