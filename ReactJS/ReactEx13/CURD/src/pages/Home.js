import React, { useEffect } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUsers } from '../redux/actions';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useHistory } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 900,
        marginTop: 100
    },
    button:{
        marginRight: "15px",
        cursor: "pointer"
    }
});

const Home = () => {
    const classes = useStyles();
    let dispatch = useDispatch();
    const { users } = useSelector(state => state.data);
    const history = useHistory();

    useEffect(() => {
        // eslint-disable-next-line
        dispatch(loadUsers())
    }, [])

    const handleDelete = (id) => {
        if (window.confirm("Are you shure want to delete user")) {
            dispatch(deleteUser(id))
        }
    }

    return (
        <div>
            <h1>Home</h1>
            <div>
                <Button variant="contained" color="primary" onClick={() => history.push("/signup")}>
                    Add User
                </Button>
            </div>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">mobile</StyledTableCell>
                            <StyledTableCell align="center">Date of Birth</StyledTableCell>
                            <StyledTableCell align="center">Address</StyledTableCell>
                            <StyledTableCell align="center">Companey</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users && users.map((user) => (
                            <StyledTableRow key={user.id}>
                                <StyledTableCell align="center">{user.id}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {user.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{user.email}</StyledTableCell>
                                <StyledTableCell align="center">{user.mobile}</StyledTableCell>
                                <StyledTableCell align="center">{user.date}</StyledTableCell>
                                <StyledTableCell align="center">{user.address}</StyledTableCell>
                                <StyledTableCell align="center">{user.company}</StyledTableCell>
                                <StyledTableCell align="center">
                                    {/* <ButtonGroup variant="contained" aria-label="contained primary button group">
                                        <Button className={classes.button} color="primary" onClick={() => history.push(`/update/${user.id}`)}><EditIcon />Edit</Button>
                                        <Button color="secondary" onClick={() => handleDelete(user.id)}><DeleteIcon/>Delete</Button>
                                    </ButtonGroup> */}

                                    <EditIcon onClick={() => history.push(`/update/${user.id}`)} className={classes.button} />
                                    <DeleteIcon onClick={() => handleDelete(user.id)} className={classes.button} />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Home
