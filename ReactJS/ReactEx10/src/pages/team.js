import React, {Component} from 'react'
import axios from 'axios'
import {  Table } from "semantic-ui-react";

export default class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: []
        };
    }
    getUsersData() {
        axios
            .get(`http://localhost:3000/login`, {})
            .then(res => {
                const data = res.data
                console.log(data)
                const users = data.map(el =>
                    <div>
                    <Table className='table'>
					<Table.Body>
						<Table.Row key={el.id}>
							<Table.Cell>{el.id}</Table.Cell>
							<Table.Cell>{el.name}</Table.Cell>
							<Table.Cell>{el.email}</Table.Cell>
							<Table.Cell>{el.mobile}</Table.Cell>
							<Table.Cell>
							{el.address}
							</Table.Cell>
							<Table.Cell>{el.date}</Table.Cell>
							<Table.Cell>{el.company}</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
                    </div>
                    )

                    this.setState({
                        users
                    })

            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getUsersData()
    }
    render() {

        return (
            <div>
				<Table className='table'>
				<Table.Header className='tablehead'>
					<Table.Row>
						<Table.HeaderCell>Id</Table.HeaderCell>
						<Table.HeaderCell>Name</Table.HeaderCell>
						<Table.HeaderCell>Email</Table.HeaderCell>
						<Table.HeaderCell>mobile</Table.HeaderCell>
						<Table.HeaderCell>Address</Table.HeaderCell>
						<Table.HeaderCell>DoB</Table.HeaderCell>
						<Table.HeaderCell>Website</Table.HeaderCell>
					</Table.Row>
					</Table.Header>
					
					</Table>
					{this.state.users}

            </div>
        )
    }
}