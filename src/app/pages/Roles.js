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
  title: 'S-' + faker.lorem.word(),
  description: 'S-' + faker.lorem.sentence(),
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

const Roles = () => {
  const { push } = useHistory();

  const columns = [
    {
      name: 'Title',
      selector: (row) => row.title,
    },
    {
      name: 'Description',
      selector: (row) => row.description,
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
        <Card.Title>Role list</Card.Title>
        <Row>
          <Col xs="6">
            <InputGroup className="mb-3">
              <FormControl placeholder="Search with title" type="text" />
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
export default Roles;
