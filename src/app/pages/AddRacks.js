import React from 'react';
import {
  Row,
  Col,
  Container,
  FormControl,
  Form,
  Card,
  Button,
} from 'react-bootstrap';

const AddRoles = () => {
  return (
    <Container fluid>
      <Card>
        <Card.Header>Add Racks</Card.Header>
        <Form className="p-2">
          <Form.Group as={Row}>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="title">Title</Form.Label>
              <FormControl placeholder="Title" />
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="title">Rack No</Form.Label>
              <FormControl placeholder="Rack No: R-4000" />
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="description">Shelf</Form.Label>
              <select className="form-control">
                <option>Shelf 1</option>
                <option>Shelf 2</option>
                <option>Shelf 3</option>
              </select>
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="description">Capacity</Form.Label>
              <FormControl type="textarea" placeholder="Capacity" />
            </Col>
          </Form.Group>
        </Form>
        <Card.Footer className="text-right">
          <Button variant="danger">Cancel</Button>
          <Button className="ml-3">Save</Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};
export default AddRoles;
