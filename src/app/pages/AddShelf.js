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
const ShelfAdd = () => {
  return (
    <Container fluid>
      <Card>
        <Card.Header>Add Shelf</Card.Header>
        <Form className="p-2">
          <Form.Group as={Row}>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="title">Shelf Name</Form.Label>
              <FormControl placeholder="Shelf Name" />
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="description">Shelf No</Form.Label>
              <FormControl type="text" placeholder="Shelf No" />
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="description">Total Rack</Form.Label>
              <FormControl type="text" placeholder="Description" />
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="description">Location/Region</Form.Label>
              <FormControl type="text" placeholder="Location" />
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
export default ShelfAdd;
