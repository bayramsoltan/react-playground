import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

const Form2 = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>First Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="enter first number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>First Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="enter first number"
            value={num2}
            onChange={(e) => setNum1(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>First Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="enter first number"
            value={num3}
            disabled
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Form2;
