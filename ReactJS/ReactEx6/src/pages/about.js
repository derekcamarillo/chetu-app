import React from 'react';
import contacts from './users.json';
import {  Table } from "semantic-ui-react";
import './about.css'

const About = () => {
return (
	<div className='aboutdiv'>
    <h1>Showing JSON Data</h1>
	<Table className='table'>
        <Table.Header className='tablehead'>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Website</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {contacts.map((el) => {
            return (
              <Table.Row key={el.id}>
                <Table.Cell>{el.id}</Table.Cell>
                <Table.Cell>{el.name}</Table.Cell>
                <Table.Cell>{el.username}</Table.Cell>
                <Table.Cell>{el.email}</Table.Cell>
                <Table.Cell>
                  {el.address.street}
                  {el.address.suite}
                  {el.address.city}
                </Table.Cell>
                <Table.Cell>{el.phone}</Table.Cell>
                <Table.Cell>{el.website}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
	</div>
);
};

export default About;
