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
  first_name: 'S-' + faker.internet.userName(),
  last_name: 'R-' + faker.internet.userName(),
  role: 'ADMIN',
  permission: 'ADD, EDIT, UPDATE',
  email: faker.internet.email(),
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

const Users = () => {
  const { push } = useHistory();

  const columns = [
    {
      name: 'First Name',
      selector: (row) => row.first_name,
    },
    {
      name: 'Last Name',
      selector: (row) => row.last_name,
    },
    {
      name: 'Role',
      selector: (row) => row.role,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
    },
    {
      name: 'Permission',
      selector: (row) => row.permission,
    },
    {
      name: 'Status',
      cell: () => {
        return <div class="badge badge-outline-success">Approved</div>;
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
        <Card.Title>User List</Card.Title>
        <Card.Title>Search User</Card.Title>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <FormControl placeholder="Name" type="text" />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <FormControl placeholder="Mobile Number" type="text" />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <FormControl placeholder="Email" type="text" />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <FormControl placeholder="Role" type="text" />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <FormControl placeholder="Permission" type="text" />
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
export default Users;
