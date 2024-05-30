import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import './LoginPage.css';


const LoginPage = () => {
  const [kitchenId, setKitchenId] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(`/kitchen/${kitchenId}`);
  };

  return (
    <Container className="mt-5">
      <h2>Staff Login</h2>
      <Form>
        <Form.Group controlId="kitchenId">
          <Form.Label>Kitchen ID</Form.Label>
          <Form.Control
            type="text"
            value={kitchenId}
            onChange={(e) => setKitchenId(e.target.value)}
            placeholder="Enter your kitchen ID"
          />
        </Form.Group>
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
        <Button variant="link" onClick={() => navigate('/user')}>
          User Page
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
