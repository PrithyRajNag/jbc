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

const AddUser = () => {
  return (
    <Container fluid>
      <Card>
        <Card.Header>Add User</Card.Header>
        <Form className="p-2">
          <Form.Group as={Row}>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="first Name">First Name</Form.Label>
              <FormControl placeholder="First Name" />
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="policy_no">Last Name</Form.Label>
              <FormControl type="text" placeholder="Last Name" />
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="mobile_no">Mobile Number</Form.Label>
              <FormControl placeholder="Mobile Number : 019XXXXXXXXXXXXX" />
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <FormControl placeholder="Email(Optional)" />
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="rac">Gender</Form.Label>
              <select className="form-control">
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="rac">Role</Form.Label>
              <select className="form-control">
                <option>Admin</option>
                <option>Manager</option>
                <option>Editor</option>
                <option>Viewer</option>
                <option>Guest User</option>
              </select>
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
export default AddUser;
