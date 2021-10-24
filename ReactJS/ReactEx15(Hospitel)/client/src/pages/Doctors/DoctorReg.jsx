import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addDocter } from '../../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';
import './CSS/DocReg.css';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginTop: 20,
        fontSize: '1rem',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '35ch',
    },
    button: {
        marginTop: 29,
        margin: theme.spacing(1),
    },
}));
function DocterReg() {
    // const history = useHistory();
    const classes = useStyles();
    let dispatch = useDispatch();
    const [state, setState] = useState({
        fname: "",
        lname: "",
        email: "",
        avatar: null,
        speciality: "",
        pracSpeciality: "",
        mobile: "",
        altmobile: "",
        dob: "",
        exp: "",
        caddress: "",
        paddress: "",
        passw: "",
        cpass: "",
    })
    const [error, setError] = useState("");
    const { fname, lname, email, avatar, speciality, pracSpeciality, mobile, altmobile, dob, exp, caddress, paddress, passw, cpass } = state;
    
    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fname || !lname || !email || !avatar || !speciality || !pracSpeciality || !mobile || !altmobile || !dob || !exp || !caddress || !paddress || !passw || !cpass ) {
            setError("Please input all input fields.")
        }
        else {
            dispatch(addDocter(state))
            setError("");
        }
    }
    return (
        <div className="main">
            <div className="inner">
                <h1 className="RegHead">Docter Registration Page</h1>
                {error && <h3 style={{color: "red"}}>{error}</h3>}
                <div className='{classes.root}'></div>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <div>
                        <TextField
                        required
                            label="FirstName"
                            type='text'
                            onChange={handleInputChange}
                            id="fname"
                            className={classes.textField}
                            helperText="Enter First Name"
                            value={fname}
                            name="fname"
                        />
                        <TextField
                        required
                            label="LastName"
                            type='text'
                            onChange={handleInputChange}
                            id="lname"
                            className={classes.textField}
                            helperText="Enter Last Name"
                            value={lname}
                            name="lname"
                        />
                    </div>
                    <div>
                        <TextField
                        required
                            label="Docter Email"
                            type="email"
                            onChange={handleInputChange}
                            id="email"
                            value={email}
                            className={classes.textField}
                            helperText="Enter Doctor Email"
                            name="email"
                        />
                        <TextField
                        required
                            label="Profile Image"
                            type="file"
                            id="avatar"
                            helperText="Upload Profile Image"
                            className={classes.textField}
                            value={avatar}
                            onChange={handleInputChange}
                            name="avatar"
                            accept="image/png, image/jpeg"
                        />
                    </div>
                    <div>
                        <TextField
                        required
                            label="Speciality"
                            type="text"
                            onChange={handleInputChange}
                            id="speciality"
                            value={speciality}
                            className={classes.textField}
                            helperText="Enter Doctor speciality"
                            name="speciality"
                        />
                        <TextField
                        required
                            label="Practices Speciality"
                            type="text"
                            id="pracSpeciality"
                            helperText="Enter Practices Speciality"
                            className={classes.textField}
                            value={pracSpeciality}
                            onChange={handleInputChange}
                            name="pracSpeciality"
                        />
                    </div>
                    <div>
                        <TextField
                        required
                            label="Mobile No"
                            type="number"
                            onChange={handleInputChange}
                            id="mobile"
                            value={mobile}
                            className={classes.textField}
                            helperText="Enter Doctor Mobile Number."
                            name="mobile"
                        />
                        <TextField
                        required
                            label="Alternet Mobile No."
                            type="number"
                            onChange={handleInputChange}
                            id="altmobile"
                            value={altmobile}
                            className={classes.textField}
                            helperText="Enter Alternate Mobile Number."
                            name="altmobile"
                        />
                    </div>
                    <div>
                        <TextField
                        required
                            type="date"
                            onChange={handleInputChange}
                            id="dob"
                            value={dob}
                            className={classes.textField}
                            helperText="Enter Date of Birth."
                            style={{ marginTop: "35px" }}
                            name="dob"
                        />
                        <TextField
                        required
                            label="Experince"
                            type="text"
                            onChange={handleInputChange}
                            id="exp"
                            value={exp}
                            className={classes.textField}
                            helperText="Enter how many years of Experince."
                            name="exp"
                        />
                    </div>
                    <div>
                        <TextField
                        required
                            label="Current Address"
                            type="text"
                            onChange={handleInputChange}
                            id="caddress"
                            value={caddress}
                            className={classes.textField}
                            helperText="Enter Current Address"
                            name="caddress"
                        />
                        <TextField
                        required
                            label="Parmanent Address"
                            type="text"
                            onChange={handleInputChange}
                            id="paddress"
                            value={paddress}
                            className={classes.textField}
                            helperText="Enter Parmanent Address"
                            name="paddress"
                        />
                    </div>
                    <div>
                        <TextField
                        required
                            label="Password"
                            type="password"
                            onChange={handleInputChange}
                            id="passw"
                            value={passw}
                            className={classes.textField}
                            helperText="Enter Your Password."
                            name="passw"
                        />
                        <TextField
                        required
                            label="Confirm Password"
                            type="password"
                            onChange={handleInputChange}
                            id="cpass"
                            value={cpass}
                            className={classes.textField}
                            helperText="Enter Your Password."
                            name="cpass"
                        />
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            color="default"
                            size="large"
                            type="submit"
                            className={classes.button}
                            startIcon={<LockOpenIcon />}
                        >
                            Register
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DocterReg;