import React from 'react';
import Form from 'react-bootstrap/Form';

function Name() {
  return (
    <Form.Group controlId="formName" className='border rounded-3 mt-5 p-3'>
      <Form.Label className='float-start mt-2'>Name</Form.Label>
      <Form.Control className='m-2 p-4' type="text" placeholder="Type your name" required />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>
  )
}

export default (Name)