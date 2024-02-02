import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Request = ({ onSave, onLogout }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const handleSave = () => {
    onSave({ name, email, phone });
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button variant="primary" onClick={handleSave}>
        Save
      </Button>
      <Button variant="secondary" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Request;