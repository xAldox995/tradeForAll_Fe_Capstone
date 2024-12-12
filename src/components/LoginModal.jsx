/* eslint-disable react/prop-types */

import { Modal, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ show, onHide }) => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.auth);
  const navigate= useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const credentials = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(login(credentials));
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered className="text-modal">
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <p className="text-danger">{error}</p>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="loginEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
              disabled={loading}
            />
          </Form.Group>
          <Form.Group controlId="loginPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
              disabled={loading}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="mt-4 w-100"
            disabled={loading}
            onClick={()=> navigate("/dashboard")}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
