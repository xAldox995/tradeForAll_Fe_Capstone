/* eslint-disable react/prop-types */

import { Modal, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../redux/actions/authActions";
import { useState } from "react";

const RegisterModal = ({ show, onHide }) => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.auth);

  // Stati locali per i campi del modulo
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userDetails = { username, email, password };

    console.log("User Details:", userDetails); // Debug
    dispatch(register(userDetails));
    onHide(); // Chiude il modale dopo il submit
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <p className="text-danger">{error}</p>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="registerName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={loading}
            />
          </Form.Group>
          <Form.Group controlId="registerEmail" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </Form.Group>
          <Form.Group controlId="registerPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="mt-4 w-100"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterModal;
