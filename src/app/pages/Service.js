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
faker.seed(123);
const data = Array.from({ length: 300 }).map((data) => ({
  id: faker.datatype.number(),
  name: 'R-' + faker.internet.userName(),
  service_no: 'S-' + faker.datatype.number(),
  description: faker.lorem.words(),
  shelf_name: 'S-' + faker.random.word(),
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

const Service = () => {
  const { push } = useHistory();

  const columns = [
    {
      name: 'Name',
      selector: (row) => row.name,
    },
    {
      name: 'Service No',
      selector: (row) => row.service_no,
    },
    {
      name: 'Description',
      selector: (row) => row.description,
    },
    {
      name: 'Status',
      cell: () => {
        return faker.datatype.boolean() ? (
          <div class="badge badge-outline-danger">Active</div>
        ) : (
          <div class="badge badge-outline-success">In active</div>
        );
      },
    },
    {
      cell: (row) => {
        return (
          <div>
            <Button
              size="small"
              onClick={(e) => {
                push({
                  pathname: '/users/edit',
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
        <Card.Title>Service List</Card.Title>
        <Row>
          <Col xs={6}>
            <InputGroup className="mb-3">
              <FormControl placeholder="Search with service name" type="text" />
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
export default Service;
