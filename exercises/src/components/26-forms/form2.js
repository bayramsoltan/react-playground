import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";

const Form2 = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);



useEffect(() => {
 setNum3(Number(num1)+Number(num2));
}, [num1,num2])


  return (
    <Container className="mt-5">
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="1. Number"
            onChange={(e) => setNum1(e.target.value)}
            value={num1}


          />
        </Form.Group>
        <Form.Group>
        <Form.Control
            type="text"
            placeholder="2. Number"
            onChange={(e) => setNum2(e.target.value)}
            value={num2}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="3. Number"
            disabled
            value={num3}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Form2;
