/* eslint-disable react/prop-types */

import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/actions/authActions';


const RegisterModal = ({ show, handleClose }) => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    });
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(register(userData));
      console.log(userData);
    }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registrati</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Nome Utente</Form.Label>
            <Form.Control type="text"
             placeholder="Inserisci il tuo nome utente"
             value={userData.username}
             onChange={(e) => setUserData({ ...userData, username: e.target.value })}
             required
             />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className='mt-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"
             placeholder="Inserisci la tua email"
             value={userData.email}
             onChange={(e) => setUserData({ ...userData, email: e.target.value })}
             required
             />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className='mt-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" 
            placeholder="Inserisci la tua password"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            required
            />
          </Form.Group>
          {error && <p className='text-danger mt-3'>{error}</p>}
          <Button type="submit" className="button mt-3" disabled={loading}>
            {loading ? 'Registrando...' : 'Registrati'}
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
export default RegisterModal;