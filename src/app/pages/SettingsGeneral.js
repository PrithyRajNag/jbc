import React from 'react';
import {
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from 'react-bootstrap';
const SettingGeneral = () => {
  return (
    <Container fluid>
      <Form>
        <FormGroup as={Row}>
          <Col xs={6} className="mb-3">
            <FormLabel>Theme Color</FormLabel>
            <Form.Check type="radio" label="Dark" />
          </Col>
          <Col xs={6} className="mb-3">
            <FormLabel>Text Color</FormLabel>
            <Form.Check type="radio" label="White" />
            <Form.Check type="radio" label="Blue" />
            <Form.Check type="radio" label="Yellow" />
          </Col>
          <Col xs={6} className="mb-3">
            <FormLabel>Language Change</FormLabel>
            <Form.Check type="radio" label="Bangla" />
            <Form.Check type="radio" label="English" />
          </Col>
          <Col xs={12} className="mb-3">
            <FormLabel>Logo Change</FormLabel>
            <FormControl type="file" />
          </Col>
          <Col xs={12} className="mb-3">
            <FormLabel>Fevicon Change</FormLabel>
            <FormControl type="file" />
          </Col>
          <Col xs={6} className="mb-3">
            <FormLabel>Add Footer text</FormLabel>
            <FormControl
              className="mb-3"
              placeholder="Jibonbima corporation &copy; "
            />
          </Col>
          <Col xs={6} className="mb-3">
            <FormLabel>Add Slogan Text</FormLabel>
            <FormControl className="mb-3" placeholder="নো মাস্ক নো সার্ভিস" />
          </Col>
        </FormGroup>
      </Form>
    </Container>
  );
};
export default SettingGeneral;
