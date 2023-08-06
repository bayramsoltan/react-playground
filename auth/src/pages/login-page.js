import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useStore } from "../store";
import { loginFail, loginSuccess } from "../store/auth/auth-actions";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "https://carrental-v3-backend.herokuapp.com";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { dispatchAuth } = useStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };

    try {
      setLoading(true);

      const respAuth = await axios.post(`${API_BASE_URL}/login`, payload);
      const token = respAuth.data.token;

      const authHeader = { Authorization: `Bearer ${token}` };
      const respUser = await axios.get(`${API_BASE_URL}/user`, {
        headers: authHeader,
      });

      // dispatchAuth({type: "LOGIN_SUCCESS",payload:respUser.data});
      dispatchAuth(loginSuccess(respUser.data));
      // console.log(respUser.data);
      navigate("/");
    } catch (err) {
      alert(err.response.data.message);
      dispatchAuth(loginFail());
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            required={true}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
