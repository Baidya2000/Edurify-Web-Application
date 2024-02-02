import React from 'react';
import { Table, Button } from 'react-bootstrap';

const RequestContactInformation = ({ contactInformation, onNext }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Contact Information</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {contactInformation.map((info, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <div>Name: {info.name}</div>
              </td>
              <td>{info.date}</td>
              <td>{info.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary" onClick={onNext}>
        Next
      </Button>
    </div>
  );
};

export default RequestContactInformation;