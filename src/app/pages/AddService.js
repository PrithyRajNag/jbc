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

const AddService = () => {
  return (
    <Container fluid>
      <Card>
        <Card.Header>Add Service</Card.Header>
        <Form className="p-2">
          <Form.Group as={Row}>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="title">Title</Form.Label>
              <FormControl placeholder="title" />
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="title">Service No</Form.Label>
              <FormControl placeholder="Service No" />
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="description">Description</Form.Label>
              <textarea
                className="form-control"
                type="textarea"
                rows={3}
                placeholder="Description"
              ></textarea>
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
export default AddService;
