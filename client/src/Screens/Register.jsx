import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../assets/Login.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', formData);
      console.log('Registration successful:', response.data);
      // Redirect to login page or another page upon successful registration
    } catch (error) {
      console.error('Error registering:', error.response.data);
      setErrors(error.response.data.errors);
    }
  };

  return (
    <Container className="register-container">
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
        </Form.Group>

        <div className="button-container">
          <Button variant="primary" type="submit" className="login-button">Register</Button>
        </div>
      </Form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </Container>
  );
};

export default Register;
