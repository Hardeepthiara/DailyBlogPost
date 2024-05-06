import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../assets/Login.css'; // Import CSS file for additional styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      console.log('Login successful:', response.data);
      // Redirect to dashboard or another page upon successful login
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <Container className="login-container">
      
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>

        <div className="button-container">
          <Button variant="primary" type="submit" className="login-button">Login</Button>
        </div>
        </Form>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </Container>
  );
};

export default Login;
