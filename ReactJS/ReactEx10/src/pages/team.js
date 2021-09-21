import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import './team.css';


function Teams(){
    const url = `http://localhost:3000/login`;
    // const [email] = useState("");
    const [data, setData] = useState([])
    const history = useHistory();

  
    useEffect(() => {
      axios.get(url).then(json => setData(json.data))
      // eslint-disable-next-line
    }, [])
    
    const HandleDelete = (id) =>{
        axios.delete(`${url}/${id}`)
        .then(function(resp){
          console.log(resp)
          axios.get(url).then(json => setData(json.data))
        })
    }
    const HandleUpdate = (id)=> {
      history.push('/update')
    }
    const renderTable = () => {
      return data.map(user => {
        return (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.date}</td>
            <td>{user.email}</td>
            <td>{user.mobile}</td>
            <td>{user.address}</td>
            <td>{user.company}</td>
            <td><button className="update" onClick={()=>HandleUpdate(user.id)}>Update</button></td>
            <td><button className="delete" onClick={()=>HandleDelete(user.id)}>Delete</button></td>
          </tr>
        )
      })
    };
  
    return (
      <div className='parent'>
          <h1 id="title">API Table</h1>
          <div className='child'>
            <table id="users">
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>DoB</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Company</th>
                <th>Update</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>{renderTable()}</tbody>
            </table>
        </div>
      </div>
    )
  }
  
  export default Teams;
