import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Cards from "./Cards";
const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://648a1ab15fa58521cab0d197.mockapi.io/product"
      );
      const data = response.data;
      setData(data);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      {loading && <Spinner animation="border" variant="danger" />}
      <Row>
        {data.map((item, index) => (
          <Col key={index} sm={6} md={4} lg={3} xl={2}>
            <Cards>{{...item}}</Cards>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
