import React, {useEffect, useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './about.css'



const useStyles = makeStyles((theme) => ({}));

function About(){
  const classes = useStyles();
  const [data, setData] = useState([])
  const url = `http://localhost:3000/login`;
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
  const columns = [
    {field: 'id', width: 80,sortable: false },
    {field: 'name', width: 230,sortable: false },
    {field: 'date', width: 130 },
    {field: 'email', width: 230 },
    {field: 'mobile', width: 150 },
    {field: 'address',  width: 230 },
    {field: 'company', width: 230 },
    {field: "Delete", renderCell: (cellValues) => {return (<Button variant="contained" color="primary" onClick={(event) => { handleDelete(event, cellValues)}}>Delete</Button>);}, width: 100, sortable: false},
    {field: "Update", renderCell: (cellValues) => {return (<Button variant="contained" color="primary" onClick={(event) => { handleUpdate(event, cellValues)}}>Update</Button>);}, width: 100, sortable: false},
    
  ]
  
  return (
    <div style={{ height: "720px", width: "80%", margin:"50px 200px", overflowX: "auto"}} className='{classes.root}'>
      <DataGrid
        columns={columns} 
        rows={data}
        pageSize={10}
        className={classes.test}
        rowsPerPageOptions={[10]}
        pagination
      />
    </div>
  )
}

export default About
