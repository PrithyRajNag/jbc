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
  rack_no: 'R-' + faker.random.word(),
  capacity: faker.datatype.number(),
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

const Racks = () => {
  const { push } = useHistory();

  const columns = [
    {
      name: 'Name',
      selector: (row) => row.name,
    },
    {
      name: 'Rack No',
      selector: (row) => row.rack_no,
    },

    {
      name: 'Shelf',
      selector: (row) => row.shelf_name,
    },
    {
      name: 'Capacity',
      selector: (row) => row.capacity,
    },
    {
      name: 'Status',
      cell: () => {
        return faker.datatype.boolean() ? (
          <div class="badge badge-outline-danger">Full</div>
        ) : (
          <div class="badge badge-outline-success">Not Full</div>
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
        <Card.Title>Rack List</Card.Title>
        <Row>
          <Col xs={6}>
            <InputGroup className="mb-3">
              <FormControl placeholder="Search with Rack Name" type="text" />
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
export default Racks;
