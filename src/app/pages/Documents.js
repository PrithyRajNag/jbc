import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import {
  Card,
  InputGroup,
  FormControl,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import faker from 'faker';
import { useHistory } from 'react-router-dom';

const data = Array.from({ length: 300 }).map((data) => ({
  id: faker.datatype.number(),
  self_no: 'S-' + faker.datatype.number(),
  rack_no: 'R-' + faker.datatype.number(),
  policy: faker.finance.routingNumber(),
  region: faker.address.city(),
  name: faker.finance.account() + '.pdf',
  date: faker.date.past().toDateString(),
}));

createTheme(
  'solarized',
  {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#191c24',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  },
  'dark'
);

const DocumentManagement = () => {
  const { push } = useHistory();

  const columns = [
    {
      name: 'Document Name',
      selector: (row) => row.name,
    },
    {
      name: 'Policy Number',
      selector: (row) => row.policy,
    },
    {
      name: 'Self No',
      selector: (row) => row.self_no,
    },
    {
      name: 'Rack No',
      selector: (row) => row.rack_no,
    },
    {
      name: 'Region',
      selector: (row) => row.region,
    },
    {
      name: 'Date',
      selector: (row) => row.date,
    },
    {
      cell: (row) => {
        return (
          <div>
            <Button
              size="small"
              onClick={(e) => {
                push({
                  pathname: '/document-management/edit',
                });
              }}
            >
              <FaEdit />
            </Button>
            <Button
              variant="danger"
              className="ml-2"
              size="small"
              onClick={(e) => {}}
            >
              <FaTrash />
            </Button>
            <Button
              variant="secondary"
              className="ml-2"
              size="small"
              onClick={(e) => {
                push({
                  pathname: '/document-management',
                });
              }}
            >
              <FaEye />
            </Button>
          </div>
        );
      },
      margin: 0,
      padding: 0,
    },
  ];

  return (
    <Card>
      <Card.Header>
        <Card.Title>Search Document</Card.Title>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <FormControl placeholder="Date" type="date" />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <FormControl placeholder="Policy Number" type="text" />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <FormControl placeholder="Name" type="text" />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <FormControl placeholder="Phone number" type="text" />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <FormControl placeholder="Self No" type="text" />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <FormControl placeholder="Rack No" type="text" />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <FormControl placeholder="Region" type="text" />
            </InputGroup>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <DataTable
          columns={columns}
          data={data}
          theme="solarized"
          pagination
          highlightOnHover
          pointerOnHover
        />
      </Card.Body>
    </Card>
  );
};
export default DocumentManagement;
