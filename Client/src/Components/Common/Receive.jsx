import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Request = ({ title, description, onSave, onLogout }) => {
  const handleSave = () => {
    onSave();
  };

  return (
    <Card>
      <Card.Header as="h5">{title}</Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Card.Body>
      <Card.Footer>
        <Button variant="secondary" onClick={onLogout}>
          Logout
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Request;