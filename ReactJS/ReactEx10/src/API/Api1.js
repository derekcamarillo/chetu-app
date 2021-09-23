import React, {useEffect, useState} from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({}));

const Api1 = () => {
    const classes = useStyles();
  const [data, setData] = useState([])
  const url = `https://jsonplaceholder.typicode.com/users`;
  useEffect(() => {
    axios.get(url).then(json => setData(json.data))
    // eslint-disable-next-line
  }, [])

  const handleDelete = (param, event) => {
    event.stopPropagation();
  };

  const handleUpdate = (param, event) => {
    event.stopPropagation();
  };

console.log(data[0])
  const columns = [
    {field: 'id', headerName: "ID", width: 80,sortable: false },
    {field: 'name', headerName: "Full Name", width: 230,sortable: false },
    {field: 'username', headerName: "User Name", width: 130 },
    {field: 'email', headerName: "Email-Id", width: 250 },
    {field: 'phone', headerName: "Mobile Number", width: 160},
    {field: 'address', headerName: "Address",  width: 230 },
    {field: 'company',headerName: "Company Name", width: 230 },
    {field: 'website',headerName: "Website Name", width: 230 },
    {field: "Delete", renderCell: (cellValues) => {return (<Button variant="contained" color="primary" onClick={(event) => { handleDelete(event, cellValues)}}>Delete</Button>);}, width: 200, sortable: false},
    {field: "Update", renderCell: (cellValues) => {return (<Button variant="contained" color="primary" onClick={(event) => { handleUpdate(event, cellValues)}}>Update</Button>);}, width: 200, sortable: false}, 
  ]
  
    return (
        <div>
            <h1>Hiii I am going to use API</h1>
            <div style={{ height: "620px", width: "90%", margin:"50px 100px", overflowX: "auto"}} className='{classes.root}'>
            <DataGrid
                columns={columns} 
                rows={data}
                pageSize={8}
                className={classes.test}
                rowsPerPageOptions={[8]}
                pagination true
                rowHeight={50}
                components={{
                    Toolbar: GridToolbar,
                  }}
            />
            </div>
        </div>
    )
}

export default Api1
