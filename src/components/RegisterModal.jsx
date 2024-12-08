/* eslint-disable react/prop-types */

import { Modal, Button, Form } from 'react-bootstrap';


const RegisterModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registrati</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Nome Utente</Form.Label>
            <Form.Control type="text" placeholder="Inserisci il tuo nome utente" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Inserisci la tua email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Inserisci la tua password" />
          </Form.Group>
          <Button type="submit" className="mt-3">
            Registrati
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default RegisterModal;