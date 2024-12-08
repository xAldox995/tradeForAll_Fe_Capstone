/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/authActions";

const LoginModal = ({ show, handleClose }) => {
  const [credenziali, setCredenziali] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credenziali));
    console.log(credenziali);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={credenziali.email}
              onChange={(e) =>
                setCredenziali({ ...credenziali, email: e.target.value })
              }
              required
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={credenziali.password}
              onChange={(e) =>
                setCredenziali({ ...credenziali, password: e.target.value })
              }
              required
            />
          </Form.Group>
          {error && <p className="text-danger mt-3">{error}</p>}
          <Button
            type="submit"
            variant="primary"
            className="mt-3"
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
