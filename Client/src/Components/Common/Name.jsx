import React from 'react';
import Form from 'react-bootstrap/Form';

function Name() {
  return (
    <Form.Group controlId="formName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Type your name" required />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>
  )
}

export default (Name)