import React from "react";
import data from "./Students.json";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "./Cards";
const Alisveris = () => {
  return (
    <Container>
      <Row className="mb-3">
        {data.map((student, index) => (
          <Col key={index} md={6} lg={3} xl={3}   >
            <Cards student={student} />{" "}
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Alisveris;