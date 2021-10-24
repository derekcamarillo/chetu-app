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
import {  loadPatients } from '../../redux/actions';
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import { useHistory } from 'react-router-dom';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

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

const Home5 = () => {
    const classes = useStyles();
    let dispatch = useDispatch();
    const { patients } = useSelector(state => state.data);
    // const history = useHistory();

    useEffect(() => {
        dispatch(loadPatients())
        // eslint-disable-next-line
    }, [])

    // const handleDelete = (id) => {
    //     if (window.confirm("Are you shure want to delete user")) {
    //         dispatch(deleteUser(id))
    //     }
    // }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ID</StyledTableCell>
                            <StyledTableCell>Patient Name</StyledTableCell>
                            <StyledTableCell align="center">Guardian</StyledTableCell>
                            <StyledTableCell align="center">Guardian Mobile</StyledTableCell>
                            <StyledTableCell align="center">Guardian Email</StyledTableCell>
                            <StyledTableCell align="center">AlterNet Mobile</StyledTableCell>
                            <StyledTableCell align="center">Date of Birth</StyledTableCell>
                            <StyledTableCell align="center">Date Of Admit</StyledTableCell>
                            <StyledTableCell align="center">Patient Problem</StyledTableCell>
                            <StyledTableCell align="center">DrName</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {patients && patients.map((user) => (
                            <StyledTableRow key={user.id}>
                                <StyledTableCell align="center">{user.id}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{user.FirstName} {user.LastName}</StyledTableCell>
                                <StyledTableCell align="center">{user.Guardian}</StyledTableCell>
                                <StyledTableCell align="center">{user.GuardianMobile}</StyledTableCell>
                                <StyledTableCell align="center">{user.GuardianEmail}</StyledTableCell>
                                <StyledTableCell align="center">{user.AlterNetMobile}</StyledTableCell>
                                <StyledTableCell align="center">{user.DateOfBirth}</StyledTableCell>
                                <StyledTableCell align="center">{user.DateOfAdmit}</StyledTableCell>
                                <StyledTableCell align="center">{user.PatientProblem}</StyledTableCell>
                                <StyledTableCell align="center">{user.DrName}</StyledTableCell>
                                <StyledTableCell align="center">
                                    {/* <ButtonGroup variant="contained" aria-label="contained primary button group">
                                        <Button className={classes.button} color="primary" onClick={() => history.push(`/update/${user.id}`)}><EditIcon />Edit</Button>
                                        <Button color="secondary" onClick={() => handleDelete(user.id)}><DeleteIcon/>Delete</Button>
                                    </ButtonGroup> */}

                                    {/* <EditIcon onClick={() => history.push(`/update/${user.id}`)} className={classes.button} />
                                    <DeleteIcon onClick={() => handleDelete(user.id)} className={classes.button} /> */}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Home5
