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
const AddDocument = () => {
  return (
    <Container fluid>
      <Card>
        <Card.Header>Add Document</Card.Header>
        <Form className="p-2">
          <Form.Group as={Row}>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="policy_no">Policy Number</Form.Label>
              <FormControl placeholder="Enter you No" />
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="policy_no">Date</Form.Label>
              <FormControl type="date" placeholder="Enter you No" />
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="first_name">First Name</Form.Label>
              <FormControl placeholder="First Name" />
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="last_name">Last Name</Form.Label>
              <FormControl placeholder="Last Name" />
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
              <Form.Label htmlFor="rac">Region</Form.Label>
              <select className="form-control">
                <option>Dhaka</option>
                <option>Chittagong</option>
                <option>Cumilla</option>
                <option>Shylet</option>
                <option>Feni</option>
              </select>
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="rac">Self No</Form.Label>
              <select className="form-control">
                <option>Self 1</option>
                <option>Self 2</option>
                <option>Self 3</option>
                <option>Self 4</option>
                <option>Self 5</option>
              </select>
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="rac">Rack No</Form.Label>
              <select className="form-control">
                <option>Rack 1</option>
                <option>Rack 2</option>
                <option>Rack 3</option>
                <option>Rack 4</option>
                <option>Rack 5</option>
              </select>
            </Col>

            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="rac">Service</Form.Label>
              <select className="form-control">
                <option>আমৃত্যু জীবন বীমা</option>
                <option>পলিসির মূল্য পরিশোধ ভিত্তিতে বীমা</option>
                <option>শিশু প্রতিরক্ষা বীমা</option>
                <option>শিশুদের পলিসির মূল্য পরিশোধভিত্তিক বীমা</option>
                <option>পেনশন স্কিম বীমা</option>
                <option>গ্রামীণ বীমা</option>
              </select>
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="file">Birth Date</Form.Label>
              <FormControl type="date" />
            </Col>
            <Col xs={6} className="mb-3">
              <Form.Label htmlFor="file">Document</Form.Label>
              <FormControl type="file" />
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
export default AddDocument;
