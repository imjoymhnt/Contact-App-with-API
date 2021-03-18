import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");
    console.log(data);

    const details = data.results[0];
    setDetails(details);
  };

  useEffect(() => {
    fetchDetails();
  }, []);
  return <div></div>;
};

export default App;
